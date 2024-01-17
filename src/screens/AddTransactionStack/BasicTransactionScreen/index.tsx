import {useState} from 'react';
import CreditStepScreen from 'screens/AddTransactionStack/BasicTransactionScreen/CreditStepScreen';
import DebitStepScreen from 'screens/AddTransactionStack/BasicTransactionScreen/DebitStepScreen';
import TransactionCategoryStepScreen from 'screens/AddTransactionStack/BasicTransactionScreen/TransactionCategoryStepScreen';
import Button from 'components/@common/buttons/Button';
import type {NonEmptyArray, Steps} from 'types/funnel';
import Funnel from 'components/@common/funnel/Funnel';
import Step from 'components/@common/funnel/Step';
import ScreenContainer from 'components/@common/ScreenContainer';
import {StyleSheet, View} from 'react-native';
import InputCompletionCheckStepScreen from 'screens/AddTransactionStack/BasicTransactionScreen/InputCompletionCheckStepScreen';
import {useNavigation} from '@react-navigation/native';
import {theme} from 'styles';

type BasicTransactionStep = 'Step1' | 'Step2' | 'Step3' | 'Step4';

const steps: NonEmptyArray<BasicTransactionStep> = [
  'Step1',
  'Step2',
  'Step3',
  'Step4',
];

const stepInfoList: Steps<typeof steps> = {
  Step1: <TransactionCategoryStepScreen />,
  Step2: <DebitStepScreen />,
  Step3: <CreditStepScreen />,
  Step4: <InputCompletionCheckStepScreen />,
};

export default function BasicTransactionScreen() {
  const navigation = useNavigation();

  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const isLastStep = currentStepIndex === steps.length - 1;

  const goToPreviousStep = () => {
    setCurrentStepIndex(step => step - 1);
  };

  const goToNextStep = () => {
    setCurrentStepIndex(step => step + 1);
  };

  const onSubmit = () => {
    navigation.navigate('AddTransactionStack', {
      screen: 'AddTransaction',
      params: {transaction: {}},
    });
  };

  const renderButtons = () => (
    <View style={styles.buttonsContainer}>
      {currentStepIndex === 0 ? null : (
        <Button
          variant="secondary"
          onPress={goToPreviousStep}
          style={{maxWidth: 80}}>
          이전
        </Button>
      )}
      <Button
        onPress={isLastStep ? onSubmit : goToNextStep}
        style={styles.button}>
        {isLastStep ? '확인' : '다음'}
      </Button>
    </View>
  );

  return (
    <ScreenContainer fixedBottomComponent={renderButtons()}>
      <Funnel steps={steps} step={steps[currentStepIndex]}>
        {Object.entries(stepInfoList).map(([name, component]) => (
          <Step key={name} name={name}>
            {component}
          </Step>
        ))}
      </Funnel>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {flexDirection: 'row', gap: 16},
  button: {
    shadowColor: theme.palette.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5, // Android용 그림자 효과
  },
});

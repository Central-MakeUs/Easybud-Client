import {useMemo, useState} from 'react';
import CreditStepScreen from 'screens/AddTransactionStack/BasicTransactionScreen/CreditStepScreen';
import DebitStepScreen from 'screens/AddTransactionStack/BasicTransactionScreen/DebitStepScreen';
import TransactionCategoryStepScreen from 'screens/AddTransactionStack/BasicTransactionScreen/TransactionCategoryStepScreen';
import Button from 'components/@common/buttons/Button';
import type {NonEmptyArray, Steps} from 'types/funnel';
import Funnel from 'components/@common/funnel/Funnel';
import Step from 'components/@common/funnel/Step';
import ScreenContainer from 'components/@common/ScreenContainer';
import {View} from 'react-native';
import InputCompletionCheckStepScreen from 'screens/AddTransactionStack/BasicTransactionScreen/InputCompletionCheckStepScreen';

export type BasicTransactionStep = 'Step1' | 'Step2' | 'Step3' | 'Step4';

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
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = steps[currentStepIndex];

  const isLastStep = currentStepIndex === steps.length - 1;

  const goToNextStep = () => {
    if (!isLastStep) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      console.log('finish');
    }
  };

  const goToPreviousStep = () => {
    if (currentStepIndex !== 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const disabled = useMemo(() => {
    return false;
  }, []);

  const buttons = () => (
    <View style={{flexDirection: 'row', gap: 16}}>
      {currentStepIndex === 0 ? null : (
        <Button
          variant="secondary"
          onPress={goToPreviousStep}
          disabled={currentStepIndex === 0}
          style={{maxWidth: 100}}>
          이전
        </Button>
      )}
      <Button onPress={goToNextStep} disabled={disabled}>
        {isLastStep ? '확인' : '다음'}
      </Button>
    </View>
  );

  return (
    <ScreenContainer fixedBottomComponent={buttons()}>
      <Funnel steps={steps} step={currentStep}>
        {Object.entries(stepInfoList).map(([name, component]) => (
          <Step key={name} name={name}>
            {component}
          </Step>
        ))}
      </Funnel>
    </ScreenContainer>
  );
}

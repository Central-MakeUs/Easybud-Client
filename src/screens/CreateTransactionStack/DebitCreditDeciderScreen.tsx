import {useNavigation} from '@react-navigation/native';
import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import NextButton from 'components/CreateTransactionStack/NextButton';
import PrevButton from 'components/CreateTransactionStack/PrevButton';

export default function DebitCreditDeciderScreen() {
  const navigation = useNavigation();
  const handlePressNextButton = () => {
    navigation.navigate('CreateTransactionStack', {screen: 'AccountType'});
  };

  const handlePressPrevButton = () => {
    navigation.goBack();
  };

  return (
    <ScreenContainer
      fixedBottomComponent={
        <>
          <PrevButton onPress={handlePressPrevButton} />
          <NextButton onPress={handlePressNextButton} />
        </>
      }>
      <Typography>DebitCreditDecider</Typography>
    </ScreenContainer>
  );
}

import {useNavigation} from '@react-navigation/native';
import Typography from 'components/@common/Typography';
import CreateTransactionScreenContainer from 'components/CreateTransactionStack/CreateTransactionScreenContainer';
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
    <CreateTransactionScreenContainer
      leftButton={<PrevButton onPress={handlePressPrevButton} />}
      rightButton={<NextButton onPress={handlePressNextButton} />}>
      <Typography>DebitCreditDecider</Typography>
    </CreateTransactionScreenContainer>
  );
}

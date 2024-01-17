import {useNavigation} from '@react-navigation/native';
import Typography from 'components/@common/Typography';
import Button from 'components/@common/buttons/Button';
import CreateTransactionScreenContainer from 'components/CreateTransactionStack/CreateTransactionScreenContainer';

export default function TransactionConfirmationScreen() {
  const navigation = useNavigation();

  const handlePressNextButton = () => {
    // Todo: new stack으로 쌓이도록 변경
    navigation.navigate('Tab', {screen: 'Ledger'});
  };

  const handlePressPrevButton = () => {
    navigation.navigate('CreateTransactionStack', {
      screen: 'DebitCreditDecider',
    });
  };

  return (
    <CreateTransactionScreenContainer
      leftButton={
        <Button variant="secondary" onPress={handlePressPrevButton}>
          새 계정 추가
        </Button>
      }
      rightButton={<Button onPress={handlePressNextButton}>저장</Button>}>
      <Typography>TransactionConfirmationScreen</Typography>
    </CreateTransactionScreenContainer>
  );
}

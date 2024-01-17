import Typography from 'components/@common/Typography';
import Button from 'components/@common/buttons/Button';
import CreateTransactionScreenContainer from 'components/CreateTransactionStack/CreateTransactionScreenContainer';
import {RootStackNavigationProp} from 'navigators/types';

type TransactionConfirmationScreenProps = {
  navigation: RootStackNavigationProp;
};

export default function TransactionConfirmationScreen({
  navigation,
}: TransactionConfirmationScreenProps) {
  const handlePressSaveButton = () => {
    navigation.navigate('Tab', {screen: 'Ledger'});
  };

  const handlePressCreateNewTransactionButton = () => {
    navigation.push('CreateTransactionStack', {screen: 'DebitCreditDecider'});
  };

  return (
    <CreateTransactionScreenContainer
      leftButton={
        <Button
          variant="secondary"
          onPress={handlePressCreateNewTransactionButton}>
          새 계정 추가
        </Button>
      }
      rightButton={<Button onPress={handlePressSaveButton}>저장</Button>}>
      <Typography>TransactionConfirmationScreen</Typography>
    </CreateTransactionScreenContainer>
  );
}

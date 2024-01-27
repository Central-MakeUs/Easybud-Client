import {useRecoilValue, useResetRecoilState} from 'recoil';
import {transactionState} from 'libs/recoil/states/transaction';
import {
  CreateTransactionStackScreenName,
  RootStackNavigationProp,
} from 'navigators/types';
import Typography from 'components/@common/Typography';
import Button from 'components/@common/Buttons/Button';
import Container from 'components/CreateTransactionStack/Container';

type TransactionConfirmationScreenProps = {
  navigation: RootStackNavigationProp;
};

/** 거래 추가 Step 5 */
export default function TransactionConfirmationScreen({
  navigation,
}: TransactionConfirmationScreenProps) {
  const transaction = useRecoilValue(transactionState);
  const clearTransaction = useResetRecoilState(transactionState);

  console.log('step5: ', transaction, transaction.accounts.length);

  const handleSave = () => {
    console.log(transaction);
    navigation.navigate('Tab', {screen: 'Ledger'});
    clearTransaction();
  };

  const handleAddAccount = () => {
    navigation.push('CreateTransactionStack', {
      screen: 'AccountType',
      params: {accountIndex: transaction.accounts.length},
    });
  };

  const handleUpdateTransaction = ({screen, accountIndex}: Basic | Account) => {
    if (screen === 'BasicTransactionInfo') {
      navigation.push('CreateTransactionStack', {
        screen,
        params: {isUpdateStep: true},
      });
    } else {
      navigation.push('CreateTransactionStack', {
        screen,
        params: {isUpdateStep: true, accountIndex},
      });
    }
  };

  return (
    <Container
      screen="TransactionConfirmation"
      title="입력하신 정보를 확인해주세요"
      fixedBottomComponent={
        <>
          <Button variant="secondary" onPress={handleAddAccount}>
            새 계정 추가
          </Button>
          <Button onPress={handleSave}>저장</Button>
        </>
      }>
      <Button
        onPress={() =>
          handleUpdateTransaction({screen: 'BasicTransactionInfo'})
        }>
        handleUpdate BasicTransactionInfo
      </Button>
      <Button
        onPress={() =>
          handleUpdateTransaction({screen: 'AccountCategory', accountIndex: 0})
        }>
        handleUpdate AccountCategory accountIndex 0
      </Button>
      <Typography>TransactionConfirmationScreen</Typography>
    </Container>
  );
}

type Basic = {
  screen: Extract<CreateTransactionStackScreenName, 'BasicTransactionInfo'>;
  accountIndex?: never;
};

type Account = {
  screen: Exclude<
    CreateTransactionStackScreenName,
    'BasicTransactionInfo' | 'TransactionConfirmation'
  >;
  accountIndex: number;
};

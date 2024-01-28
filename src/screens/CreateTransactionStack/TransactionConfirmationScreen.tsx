import {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {useRecoilState, useRecoilValue, useResetRecoilState} from 'recoil';
import {transactionState} from 'libs/recoil/states/transaction';
import {
  CreateTransactionStackScreenName,
  RootStackNavigationProp,
} from 'navigators/types';
import Button from 'components/@common/Buttons/Button';
import Container from 'components/CreateTransactionStack/Container';
import Typography from 'components/@common/Typography';
import Icon from 'components/@common/Icon';
import {getFormattedDate} from 'utils/formatDate';
import UpdateButton from 'components/CreateTransactionStack/UpdateButton';
import DebitCreditOverview from 'components/CreateTransactionStack/DebitCreditOverview';
import {balanceState} from 'libs/recoil/states/balance';
import {theme} from 'styles';
import AccountDetails from 'screens/CreateTransactionStack/AccountDetails';
import {cloneDeep, pullAt} from 'lodash';

type TransactionConfirmationScreenProps = {
  navigation: RootStackNavigationProp;
};

/** 거래 추가 Step 5 */
export default function TransactionConfirmationScreen({
  navigation,
}: TransactionConfirmationScreenProps) {
  const [transaction, setTransaction] = useRecoilState(transactionState);
  const balance = useRecoilValue(balanceState({}));
  const {accounts} = transaction;
  const clearTransaction = useResetRecoilState(transactionState);

  const handleSave = () => {
    console.log(transaction);
    clearTransaction();
    navigation.navigate('Tab', {screen: 'Ledger'});
  };

  const addNewAccount = () => {
    navigation.push('CreateTransactionStack', {
      screen: 'AccountType',
      params: {accountIndex: transaction.accounts.length},
    });
  };

  const updateTransaction = ({screen, accountIndex}: Basic | Account) => {
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

  const deleteAccount = (accountIndex: number) => {
    const newAccounts = cloneDeep(accounts);

    if (accountIndex >= accounts.length) {
      console.error(
        `지우고자 하는 계정 인덱스(${accountIndex})가 범위를 벗어납니다.`,
      );
      return;
    }

    pullAt(newAccounts, accountIndex);

    setTransaction(prevState => ({...prevState, accounts: newAccounts}));
  };

  const disabledSubmit = useMemo(() => balance !== 0, [balance]);

  return (
    <Container
      screen="TransactionConfirmation"
      header={{
        title: '입력하신 정보를 확인해주세요',
        errorMessage: disabledSubmit
          ? '차대변 합계가 달라요! 새 계정을 추가하거나 금액을 수정해주세요'
          : undefined,
      }}
      fixedBottomComponent={
        <>
          <Button variant="secondary" onPress={addNewAccount}>
            새 계정 추가
          </Button>
          <Button disabled={disabledSubmit} onPress={handleSave}>
            저장
          </Button>
        </>
      }>
      <View style={styles.info}>
        <View style={styles.header}>
          <Typography type="Body1Semibold" style={{flex: 1}}>
            기본 정보
          </Typography>
          <UpdateButton
            onPress={() => updateTransaction({screen: 'BasicTransactionInfo'})}
            endIcon={<Icon color="gray5" name="Pencil" size={12} />}>
            {transaction.summary} {getFormattedDate(transaction.date)}
          </UpdateButton>
        </View>
        <DebitCreditOverview accounts={accounts} />
      </View>
      <View style={styles.info}>
        <Typography type="Body1Semibold">상세 정보</Typography>
        {accounts.map((account, index) => (
          <AccountDetails
            key={index}
            accountIndex={index}
            account={account}
            updateTransaction={updateTransaction}
            deleteAccount={deleteAccount}
          />
        ))}
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  info: {
    gap: 20,
    paddingBottom: 10,
  },
  account: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.palette.gray3,
    gap: 5,
  },
  deleteButton: {
    alignSelf: 'flex-end',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
});

export type UpdateTransactionType = Basic | Account;

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

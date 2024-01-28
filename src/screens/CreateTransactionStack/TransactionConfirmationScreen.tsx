import {useRecoilValue, useResetRecoilState} from 'recoil';
import {transactionState} from 'libs/recoil/states/transaction';
import {
  CreateTransactionStackScreenName,
  RootStackNavigationProp,
} from 'navigators/types';
import Button from 'components/@common/Buttons/Button';
import Container from 'components/CreateTransactionStack/Container';
import {View} from 'react-native';
import Typography from 'components/@common/Typography';
import {getFormattedDate} from 'utils/formatDate';
import Icon from 'components/@common/Icon';
import UpdateButton from 'components/CreateTransactionStack/UpdateButton';
import DebitCreditOverview from 'components/CreateTransactionStack/DebitCreditOverview';
import {balanceState} from 'libs/recoil/states/balance';
import {useMemo} from 'react';

type TransactionConfirmationScreenProps = {
  navigation: RootStackNavigationProp;
};

/** 거래 추가 Step 5 */
export default function TransactionConfirmationScreen({
  navigation,
}: TransactionConfirmationScreenProps) {
  const transaction = useRecoilValue(transactionState);
  const balance = useRecoilValue(balanceState({}));
  const {accounts} = transaction;
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
  handleUpdateTransaction;

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
          <Button variant="secondary" onPress={handleAddAccount}>
            새 계정 추가
          </Button>
          <Button disabled={disabledSubmit} onPress={handleSave}>
            저장
          </Button>
        </>
      }>
      <View style={{gap: 40}}>
        <View style={{gap: 20}}>
          <View
            style={{
              gap: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Typography type="Body1Semibold" style={{flex: 1}}>
              기본 정보
            </Typography>
            <UpdateButton
              endIcon={<Icon color="gray5" name="Pencil" size={12} />}>
              {transaction.summary} {getFormattedDate(transaction.date)}
            </UpdateButton>
          </View>
          <DebitCreditOverview accounts={accounts} />
        </View>
        <View style={{gap: 10}}>
          <Typography type="Body1Semibold">상세 정보</Typography>
        </View>
      </View>
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

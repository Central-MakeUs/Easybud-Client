import {useMemo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useRecoilValue, useResetRecoilState} from 'recoil';
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
import InputForm from 'components/@common/InputForm';
import {formatNumber} from 'utils/formatAmountValue';

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
      <View style={styles.info}>
        <View style={styles.header}>
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
      <View style={styles.info}>
        <Typography type="Body1Semibold">계정 상세 정보</Typography>
        {accounts.map(({type, category, amount}, index) => (
          <View key={index} style={styles.account}>
            <TouchableOpacity style={styles.deleteButton}>
              <Typography
                type="Body2Regular"
                style={{textAlign: 'right', textDecorationLine: 'underline'}}>
                삭제
              </Typography>
            </TouchableOpacity>
            <InputForm
              size="sm"
              label="거래 요소"
              editIcon
              value={`${type.name} ${type.change}`}
              onPress={() => console.log('hi')}
            />
            <InputForm
              size="sm"
              label="분류"
              editIcon
              value={`${category.primary} > ${category.secondary} > ${category.tertiary}`}
              onPress={() => console.log('hi')}
            />
            <InputForm
              size="sm"
              label="금액"
              editIcon
              value={`${formatNumber(amount)}원`}
              onPress={() => console.log('hi')}
            />
          </View>
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
    paddingBottom: 20,
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

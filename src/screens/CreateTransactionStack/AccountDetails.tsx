import InputForm from 'components/@common/InputForm';
import Typography from 'components/@common/Typography';
import CategoryListButton from 'components/screens/CreateTransactionStack/CategoryListButton';
import useTransaction from 'hooks/useTransaction';
import React, {useMemo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {UpdateTransactionType} from 'screens/CreateTransactionStack/TransactionConfirmationScreen';
import {theme} from 'styles';
import {NewAccount} from 'types/account';
import {formatNumber} from 'utils/formatAmountValue';

type AccountDetailsProps = {
  accountIndex: number;
  account: NewAccount;
  deleteAccount: (accountIndex: number) => void;
  updateTransaction: ({screen, accountIndex}: UpdateTransactionType) => void;
};

export default function AccountDetails({
  account,
  accountIndex,
  updateTransaction,
  deleteAccount,
}: AccountDetailsProps) {
  const {accounts} = useTransaction();
  const {type, category, amount} = account;

  const isTheOnlyOne = useMemo(() => {
    return accounts.length === 1 && accountIndex === 0;
  }, [accountIndex, accounts.length]);

  return (
    <View style={styles.account}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 10,
          marginBottom: 5,
        }}>
        <Typography type="Body2Semibold">계정 {accountIndex + 1}</Typography>
        {isTheOnlyOne ? null : (
          <TouchableOpacity
            onPress={() => deleteAccount(accountIndex)}
            style={styles.deleteButton}>
            <Typography
              type="Body2Regular"
              style={{textAlign: 'right', textDecorationLine: 'underline'}}>
              삭제
            </Typography>
          </TouchableOpacity>
        )}
      </View>
      <InputForm
        size="sm"
        label="거래 요소"
        editIcon
        value={`${type.name} ${type.change}`}
        onPress={() => updateTransaction({screen: 'AccountType', accountIndex})}
      />
      <CategoryListButton
        category={category}
        onPress={() =>
          updateTransaction({screen: 'AccountCategory', accountIndex})
        }
      />
      <InputForm
        size="sm"
        label="금액"
        editIcon
        value={`${formatNumber(amount)}원`}
        onPress={() =>
          updateTransaction({screen: 'AccountAmount', accountIndex})
        }
      />
    </View>
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

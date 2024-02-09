import Icon from 'components/@common/Icon';
import InputForm from 'components/@common/InputForm';
import Typography from 'components/@common/Typography';
import CategoryListButton from 'components/screens/CreateTransactionStack/CategoryListButton';
import useTransaction from 'hooks/useTransaction';
import React, {useMemo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {UpdateTransactionType} from 'screens/CreateTransactionStack/TransactionConfirmationScreen';
import {theme} from 'styles';
import {NewAccount} from 'types/account';
import {formatToLocaleString} from 'utils/formatAmountValue';

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
        <Typography type="Body1Semibold">계정 {accountIndex + 1}</Typography>
        {isTheOnlyOne ? null : (
          <TouchableOpacity onPress={() => deleteAccount(accountIndex)}>
            <Icon name={'Bin'} size={20} />
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
        value={`${formatToLocaleString(amount)}원`}
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
    padding: 15,
    borderRadius: 12,
    gap: 5,
    backgroundColor: theme.palette.white,
  },
});

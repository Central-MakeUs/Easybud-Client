import React, {useMemo} from 'react';
import {StyleSheet, TextInputProps, TouchableOpacity} from 'react-native';
import TextField from 'components/@common/TextFields/TextField';
import Typography from 'components/@common/Typography';
import {theme} from 'styles';
import {formatNumber, isDebit} from 'utils/formatAmountValue';
import {NewAccount} from 'types/account';
import {isEqual} from 'lodash';
import {useRecoilValue} from 'recoil';
import {transactionState} from 'libs/recoil/states/transaction';
import {accountState} from 'libs/recoil/states/account';

/**
 * @param accountIndex 현 계좌 index
 */
type TextFieldProps = {
  accountIndex: number;
  onChange: (amount: number) => void;
} & Omit<
  TextInputProps,
  'value' | 'defaultValue' | 'onChangeText' | 'onChange'
>;

export default function AmountTextField({
  accountIndex,
  onChange,
}: TextFieldProps) {
  const {accounts} = useRecoilValue(transactionState);
  const {amount, type} = useRecoilValue(accountState(accountIndex));

  const balance = useMemo(
    () => calculateBalance(accounts, accountIndex),
    [accountIndex, accounts],
  );

  const disabled = useMemo(
    () => (balance > 0 && isDebit(type)) || balance === 0,
    [balance, type],
  );

  const isButtonHidden = useMemo(() => {
    return balance === 0 ? true : isEqual(amount, Math.abs(balance));
  }, [amount, balance]);

  return (
    <>
      <TextField
        type="number"
        autoFocus
        value={amount}
        onChangeText={text => onChange(Number(text))}
        keyboardType="number-pad"
      />
      {isButtonHidden ? null : (
        <TouchableOpacity
          disabled={disabled}
          onPress={() => onChange(Math.abs(balance))}
          style={[styles.button, disabled ? styles.disabled : {}]}>
          <Typography type={'Body2Semibold'}>
            현재 대차: {formatNumber(balance.toString())}원 입력
          </Typography>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
    backgroundColor: theme.palette.gray3,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  disabled: {
    opacity: 0.5,
  },
  currentBalanceText: {
    borderBottomWidth: 1,
  },
});

function calculateBalance(
  accounts: NewAccount[],
  accountIndex: number,
): number {
  let totalDebit = 0;
  let totalCredit = 0;

  accounts.forEach(({type, amount}, index) => {
    if (index !== accountIndex) {
      isDebit(type) ? (totalDebit += amount) : (totalCredit += amount);
    }
  });

  return totalDebit - totalCredit;
}

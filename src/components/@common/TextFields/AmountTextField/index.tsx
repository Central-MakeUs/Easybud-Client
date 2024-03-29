import React, {useMemo} from 'react';
import {TextInputProps} from 'react-native';
import {formatToLocaleString, isDebit} from 'utils/formatAmountValue';
import {isEqual} from 'lodash';
import {NewAccount} from 'types/account';
import UpdateButton from 'components/screens/CreateTransactionStack/UpdateButton';
import TextInput from 'components/@common/TextFields/TextInput';

/**
 * @param accountIndex 현 계좌 index
 */
type TextFieldProps = {
  balance: number;
  account: NewAccount;
  onChange: (amount: number) => void;
} & Omit<
  TextInputProps,
  'value' | 'defaultValue' | 'onChangeText' | 'onChange'
>;

export default function AmountTextField({
  balance,
  account,
  onChange,
}: TextFieldProps) {
  const {amount, type} = account;

  const disabled = useMemo(
    () =>
      balance === 0 ||
      (balance > 0 && isDebit(type)) ||
      (balance < 0 && !isDebit(type)),
    [balance, type],
  );

  const isButtonHidden = useMemo(() => {
    if (balance === 0) {
      return true;
    }
    if (balance < 0 && isDebit(type) && isEqual(amount, balance)) {
      return true;
    }

    if (balance > 0 && !isDebit(type) && isEqual(amount, Math.abs(balance))) {
      return true;
    }

    // return isDebit(type) ? balance < 0 : balance > 0;
    return false;
  }, [amount, balance, type]);

  return (
    <>
      <TextInput
        type="number"
        autoFocus
        value={amount}
        onChangeText={text => onChange(Number(text))}
        keyboardType="number-pad"
      />
      {isButtonHidden ? null : (
        <UpdateButton
          disabled={disabled}
          onPress={() => onChange(Math.abs(balance))}>
          현재 대차: {formatToLocaleString(balance)}원 입력
        </UpdateButton>
      )}
    </>
  );
}

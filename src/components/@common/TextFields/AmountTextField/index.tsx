import React, {useMemo} from 'react';
import {TextInputProps} from 'react-native';
import TextField from 'components/@common/TextFields/TextField';
import {formatNumber, isDebit} from 'utils/formatAmountValue';
import {isEqual, xor} from 'lodash';
import UpdateButton from 'components/CreateTransactionStack/UpdateButton';
import useAccount from 'hooks/useAccount';

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
  const {balance, account} = useAccount({accountIndex});
  const {amount, type} = account;
  const disabled = useMemo(
    () =>
      balance === 0 ||
      Boolean(xor([balance > 0, isDebit(type)], [false, true])[0]),
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
        <UpdateButton
          disabled={disabled}
          onPress={() => onChange(Math.abs(balance))}>
          현재 대차: {formatNumber(balance)}원 입력
        </UpdateButton>
      )}
    </>
  );
}

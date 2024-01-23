import React from 'react';
import {StyleSheet, TextInputProps, TouchableOpacity} from 'react-native';
import TextField from 'components/@common/TextFields/TextField';
import Typography from 'components/@common/Typography';
import {theme} from 'styles';
import {isEqual} from 'lodash';
import {formatNumber} from 'utils/formatAmountValue';

/**
 * @param amount 현 계좌 금액
 * @param balance 현재 대차 금액
 */
type TextFieldProps = {
  amount: number;
  balance: number;
  onChange: (amount: number) => void;
} & Omit<
  TextInputProps,
  'value' | 'defaultValue' | 'onChangeText' | 'onChange'
>;

export default function AmountTextField({
  amount,
  balance,
  onChange,
}: TextFieldProps) {
  return (
    <>
      <TextField
        type="number"
        autoFocus
        value={amount}
        onChangeText={text => onChange(Number(text))}
        keyboardType="number-pad"
      />
      {isEqual(amount, Math.abs(balance)) ? null : (
        <TouchableOpacity
          onPress={() => onChange(Math.abs(balance))}
          style={descriptionTextStyles.button}>
          <Typography type={'Body2Semibold'}>
            현재 대차: {formatNumber(balance.toString())}원 입력
          </Typography>
        </TouchableOpacity>
      )}
    </>
  );
}

const descriptionTextStyles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
    backgroundColor: theme.palette.gray3,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  currentBalanceText: {
    borderBottomWidth: 1,
  },
});

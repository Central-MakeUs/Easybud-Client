import React from 'react';
import {StyleSheet, TextInputProps, TouchableOpacity} from 'react-native';
import TextField from 'components/@common/TextFields/TextField';
import Typography from 'components/@common/Typography';
import {theme} from 'styles';

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
        autoFocus
        value={amount.toString()}
        onChangeText={text => onChange(Number(text))}
        keyboardType="number-pad"
      />
      <TouchableOpacity
        onPress={() => onChange(-1 * balance)}
        style={descriptionTextStyles.button}>
        <Typography type={'Body2Semibold'}>
          현재 대차: {balance}원 입력
        </Typography>
      </TouchableOpacity>
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

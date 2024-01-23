import React from 'react';
import {TextInputProps} from 'react-native';
import {TextFieldBase} from 'components/@common/TextFields/TextField';

/**
 * @param defaultCurrentBalance 현재 대차를 나타내는 텍스트
 */
type TextFieldProps = {defaultCurrentBalance?: string} & TextInputProps;

export default function AmountTextField({
  defaultValue = '0원',
  defaultCurrentBalance,
}: TextFieldProps) {
  return (
    <TextFieldBase defaultValue={defaultValue} isAmountField={true}>
      <TextFieldBase.Container>
        <TextFieldBase.Label label="금액" />
        <TextFieldBase.CustomTextInput />
        <TextFieldBase.ClearIcon />
      </TextFieldBase.Container>
      <TextFieldBase.TextFieldHelperText
        defaultCurrentBalance={defaultCurrentBalance}
      />
    </TextFieldBase>
  );
}

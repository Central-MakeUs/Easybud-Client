import React from 'react';
import {TextInputProps} from 'react-native';
import {CommonTextFieldBase} from 'components/@common/TextFields/CommonTextField';

/**
 * @param defaultCurrentBalance 현재 대차를 나타내는 텍스트
 */
type TextFieldProps = {defaultCurrentBalance?: string} & TextInputProps;

export default function AmountTextField({
  defaultValue,
  defaultCurrentBalance,
}: TextFieldProps) {
  return (
    <CommonTextFieldBase defaultValue={defaultValue}>
      <CommonTextFieldBase.Container>
        <CommonTextFieldBase.Label label="금액" />
        <CommonTextFieldBase.CustomTextInput isAmountField={true} />
        <CommonTextFieldBase.ClearIcon />
      </CommonTextFieldBase.Container>
      <CommonTextFieldBase.TextFieldHelperText
        defaultCurrentBalance={defaultCurrentBalance}
      />
    </CommonTextFieldBase>
  );
}

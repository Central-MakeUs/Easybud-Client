import {TextInputProps} from 'react-native';
import {TextFieldBase} from 'components/@common/TextFields/TextField';

/**
 * @param label label 텍스트, 텍스트 필드에 값이 있다면 상단에 보여주는 텍스트
 */
type DefaultTextFieldProps = {label?: string} & TextInputProps;

export default function DefaultTextField({
  defaultValue,
  label,
  placeholder,
}: DefaultTextFieldProps) {
  return (
    <TextFieldBase defaultValue={defaultValue}>
      <TextFieldBase.Container>
        <TextFieldBase.Label label={label!} />
        <TextFieldBase.CustomTextInput
          isAmountField={false}
          placeholder={placeholder}
        />
        <TextFieldBase.ClearIcon />
      </TextFieldBase.Container>
    </TextFieldBase>
  );
}

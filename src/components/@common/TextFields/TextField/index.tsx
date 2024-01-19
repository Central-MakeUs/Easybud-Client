import {useState} from 'react';
import {TextInputProps} from 'react-native';
import CommonTextField from 'components/@common/TextFields/CommonTextField';

/**
 * @param label label 텍스트, 텍스트 필드에 값이 있다면 상단에 보여주는 텍스트
 */
type TextFieldProps = {label?: string} & TextInputProps;

export default function TextField({
  defaultValue,
  label,
  placeholder,
}: TextFieldProps) {
  const [value, setValue] = useState(defaultValue ?? '');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [height, setHeight] = useState(0);

  const onChangeText = (text: string) => setValue(text);

  const handleClearInput = () => {
    setValue('');
    setHeight(0);
  };

  return (
    <CommonTextField
      value={value}
      isFocused={isFocused}
      height={height}
      setHeight={setHeight}
      label={label}
      placeholder={placeholder}
      setIsFocused={setIsFocused}
      onChangeText={onChangeText}
      handleClearInput={handleClearInput}
    />
  );
}

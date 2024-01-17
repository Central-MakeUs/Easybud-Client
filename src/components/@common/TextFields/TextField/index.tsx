import {useState} from 'react';
import {
  TextInputProps,
  NativeSyntheticEvent,
  TextInputContentSizeChangeEventData,
} from 'react-native';
import CommonTextField from 'components/@common/TextFields/CommonTextField';

type TextFieldProps = TextInputProps;

export default function TextField({defaultValue}: TextFieldProps) {
  const [value, setValue] = useState(defaultValue ?? '');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [height, setHeight] = useState(0);

  const onChangeText = (text: string) => setValue(text);

  const handleClearInput = () => {
    setValue('');
    setHeight(0);
  };

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  const handleInputHeight = (
    e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>,
  ) => {
    e.nativeEvent.contentSize.height &&
      setHeight(e.nativeEvent.contentSize.height);
  };

  return (
    <CommonTextField
      value={value}
      isFocused={isFocused}
      height={height}
      onChangeText={onChangeText}
      handleBlur={handleBlur}
      handleFocus={handleFocus}
      handleInputHeight={handleInputHeight}
      handleClearInput={handleClearInput}
    />
  );
}

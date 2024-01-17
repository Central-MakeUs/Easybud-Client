import React, {useState} from 'react';
import {
  NativeSyntheticEvent,
  TextInputContentSizeChangeEventData,
  TextInputKeyPressEventData,
  TextInputProps,
} from 'react-native';
import {
  formatNumberToLocaleString,
  formatValue,
  parseNumberFromString,
} from 'utils/formatValue';
import CommonTextField from 'components/@common/TextFields/CommonTextField';
import DescriptionText from 'components/@common/TextFields/DescriptionText';

/**
 * @param defaultCurrentBalance 현재 대차를 나타내는 텍스트
 */
type TextFieldProps = {defaultCurrentBalance?: string} & TextInputProps;

export default function AmountTextField({
  defaultValue,
  defaultCurrentBalance,
}: TextFieldProps) {
  const [value, setValue] = useState(formatValue(defaultValue) ?? '');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [height, setHeight] = useState(0);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  const handleClearInput = () => {
    setValue('0원');
    setHeight(56);
  };

  const handleInputHeight = (
    e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>,
  ) => {
    e.nativeEvent.contentSize.height &&
      setHeight(e.nativeEvent.contentSize.height);
  };

  const onChangeText = (text: string) => setValue(formatValue(text));

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
    if (e.nativeEvent.key === 'Backspace') {
      if (value !== '0원') {
        const parsedValue = parseNumberFromString(value).slice(0, -1);

        setValue(`${formatNumberToLocaleString(parsedValue)}원`);
      }

      e.preventDefault();
    }
  };

  return (
    <>
      <CommonTextField
        isAmountField={true}
        value={value}
        placeholder="금액"
        isFocused={isFocused}
        height={height}
        onChangeText={onChangeText}
        handleBlur={handleBlur}
        handleFocus={handleFocus}
        handleInputHeight={handleInputHeight}
        handleClearInput={handleClearInput}
        handleKeyPress={handleKeyPress}
      />
      <DescriptionText
        value={value}
        setValue={setValue}
        defaultCurrentBalance={defaultCurrentBalance}
      />
    </>
  );
}

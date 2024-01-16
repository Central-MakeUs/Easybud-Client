import React, {useState} from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputContentSizeChangeEventData,
  TextInputKeyPressEventData,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from 'styles';
import {
  formatNumberToLocaleString,
  formatValue,
  parseNumberFromString,
} from 'utils/formatValue';
import Icon from 'components/@common/Icon';

type TextFieldProps = TextInputProps;

export default function TextField({defaultValue, ...props}: TextFieldProps) {
  const [value, setValue] = useState(formatValue(defaultValue) ?? '');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [height, setHeight] = useState(0);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const clearInput = () => {
    setValue(`0원`);
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
      } else {
        setValue(`0원`);
      }

      e.preventDefault();
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          borderBottomColor:
            theme.palette[isFocused || value ? 'primary' : 'gray3'],
        },
      ]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={props.placeholder ?? '내용을 입력해주세요.'}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyPress={handleKeyPress}
        multiline={true}
        underlineColorAndroid="transparent"
        onContentSizeChange={handleInputHeight}
        style={[styles.textInput, {height}]}
      />
      {value !== '' && (
        <TouchableOpacity onPress={clearInput}>
          <Icon name="XCircle" color={theme.palette.gray3} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: theme.palette.primary,
    justifyContent: 'space-between',
    gap: 10,
    alignItems: 'center',
    paddingVertical: 11,
    paddingHorizontal: 16,
    width: '100%',
    flex: 1,
  },
  textInput: {
    ...theme.typography.Title1Bold,
    placeholderTextColor: theme.palette.gray3,
    maxWidth: '93%',
    flex: 1,
  },
});

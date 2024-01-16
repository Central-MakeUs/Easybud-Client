import React, {useEffect, useState} from 'react';
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
import Typography from 'components/@common/Typography';

/**
 * @param defaultCurrentBalance 현재 대차를 나타내는 텍스트
 */
type TextFieldProps = {defaultCurrentBalance?: string} & TextInputProps;

export default function TextField({
  defaultValue,
  defaultCurrentBalance,
  ...props
}: TextFieldProps) {
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
      }

      e.preventDefault();
    }
  };

  const calculateCurrentBalance = () => {
    const currentBalance = formatNumberToLocaleString(
      String(
        -parseNumberFromString(defaultCurrentBalance!) +
          Number(parseNumberFromString(value)),
      ),
    );

    return currentBalance;
  };

  const handlePressCurrentBalanceButton = () => {
    setValue(
      formatValue(
        String(
          -(
            -parseNumberFromString(defaultCurrentBalance!) +
            Number(parseNumberFromString(value))
          ),
        ),
      ),
    );
  };

  return (
    <>
      <View
        style={[
          textFieldStyles.textFieldContainer,
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
          style={[textFieldStyles.textInput, {height}]}
        />
        {value !== '' && (
          <TouchableOpacity onPress={clearInput}>
            <Icon name="XCircle" color={theme.palette.gray3} />
          </TouchableOpacity>
        )}
      </View>
      <View style={textFieldStyles.currentBalanceContainer}>
        <Typography type={'Body2Regular'}>현재 대차 : </Typography>
        <TouchableOpacity>
          <Typography
            type={'Body2Regular'}
            onPress={handlePressCurrentBalanceButton}
            style={textFieldStyles.currentBalanceText}>
            {`${calculateCurrentBalance()}원`}
          </Typography>
        </TouchableOpacity>
      </View>
    </>
  );
}

const textFieldStyles = StyleSheet.create({
  textFieldContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderBottomColor: theme.palette.primary,
    justifyContent: 'space-between',
    gap: 10,
    alignItems: 'center',
    paddingVertical: 11,
    paddingHorizontal: 16,
    width: '100%',
    flex: 1,
    marginBottom: 10,
  },
  textInput: {
    ...theme.typography.Title1Bold,
    placeholderTextColor: theme.palette.gray3,
    maxWidth: '93%',
    flex: 1,
  },
  currentBalanceContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  currentBalanceText: {
    borderBottomWidth: 1,
  },
});

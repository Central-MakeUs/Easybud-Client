import Icon from 'components/@common/Icon';
import React, {useState} from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputContentSizeChangeEventData,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from 'styles';

/**
 * @param value 텍스트 필드에 표시될 값
 * @param onChangeText 값이 변경될 때 호출. 변경된 텍스트가 매개변수로 전달
 * @param ...props - react native TextInputProps
 */
type TextFieldProps = {
  value: string;
  onChangeText: (text: string) => void;
} & Omit<TextInputProps, 'value' | 'onChangeText'>;

export default function TextField({
  value,
  onChangeText,
  ...props
}: TextFieldProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [height, setHeight] = useState(0);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const clearInput = () => {
    onChangeText('');
    setHeight(0);
  };

  const handleInputHeight = (
    e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>,
  ) => {
    e.nativeEvent.contentSize.height &&
      setHeight(e.nativeEvent.contentSize.height);
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
    ...theme.typography.Title2Regular,
    placeholderTextColor: theme.palette.gray3,
    maxWidth: '93%',
    flex: 1,
  },
});

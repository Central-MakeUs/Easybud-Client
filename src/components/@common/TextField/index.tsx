import Icon from 'components/@common/Icon';
import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
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

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const clearInput = () => onChangeText('');

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
        style={styles.text}
      />
      {value !== '' && (
        <TouchableOpacity onPress={clearInput} style={styles.clearButton}>
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
  },
  text: {
    ...theme.typography.Title1Semibold1,
    placeholderTextColor: theme.palette.gray3,
    maxWidth: '93%',
  },
  clearButton: {},
});

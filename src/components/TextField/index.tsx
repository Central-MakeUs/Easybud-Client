import Icon from 'components/Icon';
import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from 'styles';

type TextFieldProps = {
  value: string;
  onChangeText: (text: string) => void;
} & TextInputProps;

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

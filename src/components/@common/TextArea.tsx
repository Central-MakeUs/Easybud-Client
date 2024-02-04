import {Dispatch, SetStateAction, useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {theme} from 'styles';

/**
 * @param placeholder placeholder 텍스트
 * @param setText text를 변경하는 함수
 */
type TextAreaProps = {
  placeholder?: string;
  setText: Dispatch<SetStateAction<string>>;
};

export default function TextArea({placeholder, setText}: TextAreaProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  return (
    <TextInput
      onChangeText={setText}
      onFocus={handleFocus}
      onBlur={handleBlur}
      underlineColorAndroid="transparent"
      placeholder={placeholder}
      placeholderTextColor={theme.palette.gray4}
      style={[
        textAreaStyles.container,
        isFocused && {borderWidth: 1.5, borderColor: theme.palette.primary},
      ]}
    />
  );
}

const textAreaStyles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 56,
    backgroundColor: theme.palette.gray3,
    borderRadius: 12,
    paddingHorizontal: 15,
    color: theme.palette.gray5,
  },
});

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
 * @param defaultValue 텍스트 필드에 맨 처음에 표시될 기본값
 * @param placeholder 텍스트 필드 placeholder
 */

type TextFieldProps = {defaultValue: string} & Pick<
  TextInputProps,
  'placeholder'
>;

export default function TextField({defaultValue, ...props}: TextFieldProps) {
  const [text, setText] = useState(defaultValue ?? '');
  const [height, setHeight] = useState(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const clearInput = () => {
    setText('');
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
            theme.palette[isFocused || text ? 'primary' : 'gray3'],
        },
      ]}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder={props.placeholder ?? '내용을 입력해주세요.'}
        onFocus={handleFocus}
        onBlur={handleBlur}
        multiline={true}
        underlineColorAndroid="transparent"
        onContentSizeChange={handleInputHeight}
        style={[styles.text, {height}]}
      />
      {text !== '' && (
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
  },
  text: {
    ...theme.typography.Title1Semibold1,
    placeholderTextColor: theme.palette.gray3,
    width: '100%',
    height: '100%',
  },
});

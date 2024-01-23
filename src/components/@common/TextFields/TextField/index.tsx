import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputContentSizeChangeEventData,
} from 'react-native';
import {theme} from 'styles';
import Icon from 'components/@common/Icon';
import Typography from 'components/@common/Typography';
import {useState} from 'react';

/**
 * @param label label 텍스트
 */
type TextFieldProps = TextInputProps & {
  label?: string;
};

export default function TextField({
  value,
  onChangeText,
  label,
  ...props
}: TextFieldProps) {
  const [height, setHeight] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleInputHeight = (
    e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>,
  ) => {
    e.nativeEvent.contentSize.height &&
      setHeight(e.nativeEvent.contentSize.height);
  };

  const handleClearInput = () => {
    setHeight(0);
    onChangeText && onChangeText('');
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <View
      style={[
        commonTextFieldStyles.textFieldContainer,
        {
          borderBottomColor:
            theme.palette[isFocused || value ? 'primary' : 'gray3'],
        },
      ]}>
      {label && (
        <Typography
          type={'Body2Regular'}
          color={'gray3'}
          style={commonTextFieldStyles.label}>
          {label}
        </Typography>
      )}
      <TextInput
        {...props}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={theme.palette.gray3}
        onFocus={handleFocus}
        onBlur={handleBlur}
        underlineColorAndroid="transparent"
        onContentSizeChange={handleInputHeight}
        style={[commonTextFieldStyles.textInput, {height}]}
      />
      {value !== '' && (
        <TouchableOpacity onPress={handleClearInput}>
          <Icon name="XCircle" color={theme.palette.gray3} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const commonTextFieldStyles = StyleSheet.create({
  textFieldContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderBottomColor: theme.palette.primary,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 11,
    paddingRight: 16,
    width: '100%',
    marginBottom: 10,
    position: 'relative',
  },
  textInput: {
    ...theme.typography.Title1Bold,
    maxWidth: '93%',
    flex: 1,
    color: theme.palette.black,
  },
  label: {
    position: 'absolute',
    top: -4,
    height: 20,
    width: '100%',
  },
});

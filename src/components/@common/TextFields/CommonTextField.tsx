import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  TextInputContentSizeChangeEventData,
} from 'react-native';
import {theme} from 'styles';
import Icon from 'components/@common/Icon';
import Typography from 'components/@common/Typography';

type CommonTextFieldProps = TextInputProps & {
  isAmountField?: boolean;
  isFocused: boolean;
  label?: string;
  height: number;
  handleBlur: () => void;
  handleFocus: () => void;
  handleInputHeight: (
    e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>,
  ) => void;
  handleClearInput: () => void;
  handleKeyPress?: (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => void;
};

export default function CommonTextField({
  isAmountField = false,
  isFocused,
  value,
  height,
  onChangeText,
  handleBlur,
  handleFocus,
  handleInputHeight,
  handleClearInput,
  handleKeyPress,
  placeholder,
  label,
}: CommonTextFieldProps) {
  console.log(placeholder);
  return (
    <View
      style={[
        commonTextFieldStyles.textFieldContainer,
        {
          borderBottomColor:
            theme.palette[isFocused || value ? 'primary' : 'gray3'],
        },
      ]}>
      {value && (
        <Typography
          type={'Body2Regular'}
          color={'gray3'}
          style={commonTextFieldStyles.label}>
          {label}
        </Typography>
      )}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.palette.gray3}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyPress={e => handleKeyPress?.(e)}
        multiline={true}
        underlineColorAndroid="transparent"
        onContentSizeChange={handleInputHeight}
        keyboardType={isAmountField ? 'phone-pad' : 'default'}
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

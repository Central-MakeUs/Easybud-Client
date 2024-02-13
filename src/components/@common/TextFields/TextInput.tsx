import {
  View,
  TextInput as RNTextInput,
  TouchableOpacity,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import {theme} from 'styles';
import Icon from 'components/@common/Icon';
import Typography from 'components/@common/Typography';
import {useState} from 'react';
import {extractNumbers, formatToLocaleString} from 'utils/formatAmountValue';

/**
 * @param type number, string
 * @param label label 텍스트
 */
type TextFieldProps = Omit<TextInputProps, 'value'> & {
  label?: string;
  value: number | string;
  type?: 'number' | 'string';
};

export default function TextInput({
  value,
  onChangeText,
  label,
  type = 'string',
  ...props
}: TextFieldProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleChangeText = (text: string) =>
    onChangeText && onChangeText(extractNumbers(text));

  const handleClearInput = () => handleChangeText('');

  return (
    <View
      style={[
        styles.textFieldContainer,
        {
          paddingBottom: 5,
          borderBottomColor:
            theme.palette[isFocused || value ? 'primary' : 'gray3'],
        },
      ]}>
      {label && (
        <Typography type={'Body2Regular'} color={'gray3'} style={styles.label}>
          {label}
        </Typography>
      )}
      <RNTextInput
        maxLength={20}
        value={formatToLocaleString(value)}
        onChangeText={handleChangeText}
        placeholderTextColor={theme.palette.gray3}
        onFocus={handleFocus}
        onBlur={handleBlur}
        underlineColorAndroid="transparent"
        style={{
          color: theme.palette.black,
          ...theme.typography.Title1Semibold1,
          flex: 1,
        }}
        {...props}
      />
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
        }}>
        {type === 'number' && (
          <Typography type={'Title2SemiBold'} color={'gray6'}>
            원
          </Typography>
        )}
        {value !== '' && (
          <TouchableOpacity onPress={handleClearInput}>
            <Icon name="XCircle" color={theme.palette.gray3} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textFieldContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderBottomColor: theme.palette.primary,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    paddingRight: 16,
    width: '100%',
    marginBottom: 10,
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

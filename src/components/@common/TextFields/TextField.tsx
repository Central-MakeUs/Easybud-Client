import {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  TextInputContentSizeChangeEventData,
} from 'react-native';
import {theme} from 'styles';
import {
  formatNumberToLocaleString,
  formatValue,
  parseNumberFromString,
} from 'utils/formatAmountValue';
import Icon from 'components/@common/Icon';
import Typography from 'components/@common/Typography';
import DescriptionText from 'components/@common/TextFields/DescriptionText';

/**
 * @param isAmountField AmountTextField인지 여부
 * @param isFocused text input의 focus 여부
 * @param label label 텍스트
 * @param height text input의 높이
 * @param setHeight text input의 높이를 변경하는 함수
 * @param setIsFocused text input의 focus 여부를 변경하는 함수
 * @param handleClearInput text input의 X 아이콘을 눌렀을 때 동작하는 함수
 * @param handleKeyPress text input에서 특정 키를 눌렀을 때 동작하는 함수
 */

export function Container({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  const textFieldContext = useContext(TextFieldContext);

  return (
    <View
      style={[
        textFieldStyles.textFieldContainer,
        {
          borderBottomColor:
            theme.palette[
              textFieldContext?.isFocused || textFieldContext?.value
                ? 'primary'
                : 'gray3'
            ],
        },
      ]}>
      {children}
    </View>
  );
}

export function Label({label}: {label: string}) {
  const textFieldContext = useContext(TextFieldContext);

  return (
    textFieldContext?.value && (
      <Typography
        type={'Body2Regular'}
        color={'gray3'}
        style={textFieldStyles.label}>
        {label}
      </Typography>
    )
  );
}

export function CustomTextInput({placeholder}: {placeholder?: string}) {
  const textFieldContext = useContext(TextFieldContext);

  const handleInputHeight = (
    e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>,
  ) => {
    e.nativeEvent.contentSize.height &&
      textFieldContext?.setHeight?.(e.nativeEvent.contentSize.height);
  };

  const handleFocus = () => textFieldContext?.setIsFocused?.(true);

  const handleBlur = () => textFieldContext?.setIsFocused?.(false);

  return (
    <TextInput
      value={textFieldContext?.value}
      placeholder={placeholder}
      placeholderTextColor={theme.palette.gray3}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
        textFieldContext?.handleKeyPress?.(e)
      }
      multiline={true}
      underlineColorAndroid="transparent"
      onContentSizeChange={handleInputHeight}
      keyboardType={textFieldContext?.isAmountField ? 'phone-pad' : 'default'}
      caretHidden={true}
      style={[textFieldStyles.textInput, {height: textFieldContext?.height}]}
    />
  );
}

export function ClearIcon() {
  const textFieldContext = useContext(TextFieldContext);

  return (
    textFieldContext?.value !== '' && (
      <TouchableOpacity onPress={textFieldContext?.handleClearInput}>
        <Icon name="XCircle" color={theme.palette.gray3} />
      </TouchableOpacity>
    )
  );
}

export function TextFieldHelperText({
  defaultCurrentBalance,
}: {
  defaultCurrentBalance?: string;
}) {
  const textFieldContext = useContext(TextFieldContext);

  return (
    <DescriptionText
      value={textFieldContext?.value ?? ''}
      setValue={textFieldContext?.setValue!}
      defaultCurrentBalance={defaultCurrentBalance}
    />
  );
}

const TextFieldContext = createContext<TextFieldProps | undefined>(undefined);

type TextFieldProps = {
  isAmountField?: boolean;
  children?: ReactElement | ReactElement[];
  defaultValue?: string;
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  isFocused?: boolean;
  setIsFocused?: Dispatch<SetStateAction<boolean>>;
  height?: number;
  setHeight?: Dispatch<SetStateAction<number>>;
  handleClearInput?: () => void;
  onChangeText?: (text: string) => void;
  handleKeyPress?: (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => void;
};

export function TextField({
  isAmountField = false,
  children,
  defaultValue = '',
}: TextFieldProps) {
  const [value, setValue] = useState(
    isAmountField ? formatValue(defaultValue) : defaultValue,
  );
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [height, setHeight] = useState(0);

  const handleClearInput = () => {
    if (isAmountField) {
      setValue('0원');
      setHeight(55);
    } else {
      setValue('');
      setHeight(0);
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
    if (e.nativeEvent.key === 'Backspace') {
      if (value !== '0원') {
        const parsedValue = parseNumberFromString(value).slice(0, -1);
        const newValue = `${formatNumberToLocaleString(parsedValue)}원`;

        setValue(newValue);
      }

      e.preventDefault();
    } else {
      const newValue = e.nativeEvent.key;
      setValue(prevValue =>
        isAmountField
          ? formatValue(prevValue + newValue)
          : prevValue + newValue,
      );
    }
  };

  return (
    <TextFieldContext.Provider
      value={{
        value,
        setValue,
        isFocused,
        setIsFocused,
        height,
        setHeight,
        handleClearInput,
        handleKeyPress,
      }}>
      {children}
    </TextFieldContext.Provider>
  );
}

export const TextFieldBase = Object.assign(TextField, {
  Container,
  Label,
  CustomTextInput,
  ClearIcon,
  TextFieldHelperText,
});

const textFieldStyles = StyleSheet.create({
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

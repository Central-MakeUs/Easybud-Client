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
 * @param children 자식 요소
 */
type ContainerProps = {
  children: ReactElement | ReactElement[];
};

export function Container({children}: ContainerProps) {
  const {isFocused, value} = useContext(TextFieldContext) || {};
  const borderBottomColor =
    theme.palette[isFocused || value ? 'primary' : 'gray3'];

  return (
    <View
      style={[
        textFieldStyles.textFieldContainer,
        {
          borderBottomColor,
        },
      ]}>
      {children}
    </View>
  );
}

/**
 * @param label label 텍스트
 */
type LabelProps = {
  label: string;
};

export function Label({label}: LabelProps) {
  const {value} = useContext(TextFieldContext) || {};

  return (
    value && (
      <Typography
        type={'Body2Regular'}
        color={'gray3'}
        style={textFieldStyles.label}>
        {label}
      </Typography>
    )
  );
}

/**
 * @param placeholder placeholder 텍스트
 */
type CustomTextInputProps = {placeholder?: string};

export function CustomTextInput({placeholder}: CustomTextInputProps) {
  const {
    setHeight,
    setIsFocused,
    value,
    handleKeyPress,
    isAmountField,
    height,
    onChangeText,
  } = useContext(TextFieldContext) || {};

  const handleInputHeight = (
    e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>,
  ) => {
    e.nativeEvent.contentSize.height &&
      setHeight?.(e.nativeEvent.contentSize.height);
  };

  const handleFocus = () => setIsFocused?.(true);

  const handleBlur = () => setIsFocused?.(false);

  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      placeholderTextColor={theme.palette.gray3}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
        handleKeyPress?.(e)
      }
      onChangeText={onChangeText}
      multiline={true}
      underlineColorAndroid="transparent"
      onContentSizeChange={handleInputHeight}
      keyboardType={isAmountField ? 'phone-pad' : 'default'}
      caretHidden={true}
      style={[textFieldStyles.textInput, {height}]}
    />
  );
}

export function ClearIcon() {
  const {value, handleClearInput} = useContext(TextFieldContext) || {};

  return (
    value && (
      <TouchableOpacity onPress={handleClearInput}>
        <Icon name="XCircle" color={theme.palette.gray3} />
      </TouchableOpacity>
    )
  );
}

/**
 * @param defaultCurrentBalance value가 0원인 경우 helper text에 뜰 대차 금액
 */
type TextFieldHelperTextProps = {
  defaultCurrentBalance?: string;
};

export function TextFieldHelperText({
  defaultCurrentBalance,
}: TextFieldHelperTextProps) {
  const {value, setValue} = useContext(TextFieldContext) || {};

  return (
    <DescriptionText
      value={value ?? ''}
      setValue={setValue!}
      defaultCurrentBalance={defaultCurrentBalance}
    />
  );
}

/**
 * @param value text input의 value 상태값
 * @param setValue text input의 value 값을 변경하는 함수
 * @param isFocused text input의 focus 여부
 * @param setIsFocused text input의 focus 여부 값을 변경하는 함수
 * @param height text input의 높이
 * @param setHeight text input의 높이를 변경하는 함수
 * @param handleClearInput text input의 X 아이콘을 눌렀을 때 동작하는 함수
 * @param handleKeyPress text input에서 특정 키를 눌렀을 때 동작하는 함수
 * @param onChangeText text input에서 텍스트가 변할 때 호출되는 함수
 * @param isAmountField AmountTextField인지 여부
 */
type TextFieldContextType = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  isFocused: boolean;
  setIsFocused: Dispatch<SetStateAction<boolean>>;
  height: number;
  setHeight: Dispatch<SetStateAction<number>>;
  handleClearInput: () => void;
  handleKeyPress: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void;
  onChangeText: (text: string) => void;
  isAmountField: boolean;
};

const TextFieldContext = createContext<TextFieldContextType | undefined>(
  undefined,
);

/**
 * @param children 자식 요소
 * @param isAmountField AmountTextField인지 여부
 * @param defaultValue text input의 기본값
 */
type TextFieldProps = {
  children: ReactElement | ReactElement[];
  isAmountField?: boolean;
  defaultValue?: string;
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
    if (isAmountField) {
      if (e.nativeEvent.key === 'Backspace') {
        if (value !== '0원') {
          const parsedValue = parseNumberFromString(value).slice(0, -1);
          const newValue = `${formatNumberToLocaleString(parsedValue)}원`;

          setValue(newValue);
        }

        e.preventDefault();
      } else {
        setValue(prevValue =>
          isAmountField
            ? formatValue(prevValue + e.nativeEvent.key)
            : prevValue + e.nativeEvent.key,
        );
      }
    }
  };

  const onChangeText = (text: string) => {
    if (!isAmountField) {
      setValue(text);
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
        onChangeText,
        isAmountField,
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

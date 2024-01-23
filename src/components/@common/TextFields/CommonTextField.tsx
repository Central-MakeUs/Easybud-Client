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
import Icon from 'components/@common/Icon';
import Typography from 'components/@common/Typography';
import {
  formatNumberToLocaleString,
  formatValue,
  parseNumberFromString,
} from 'utils/formatAmountValue';
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

export function Container({children}: {children: ReactElement[]}) {
  const commonTextFieldContext = useContext(CommonTextFieldContext);

  return (
    <View
      style={[
        commonTextFieldStyles.textFieldContainer,
        {
          borderBottomColor:
            theme.palette[
              commonTextFieldContext?.isFocused || commonTextFieldContext?.value
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
  const commonTextFieldContext = useContext(CommonTextFieldContext);

  return (
    commonTextFieldContext?.value && (
      <Typography
        type={'Body2Regular'}
        color={'gray3'}
        style={commonTextFieldStyles.label}>
        {label}
      </Typography>
    )
  );
}

export function CustomTextInput({
  isAmountField,
  placeholder,
}: {
  isAmountField: boolean;
  placeholder?: string;
}) {
  const commonTextFieldContext = useContext(CommonTextFieldContext);

  const handleInputHeight = (
    e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>,
  ) => {
    e.nativeEvent.contentSize.height &&
      commonTextFieldContext?.setHeight?.(e.nativeEvent.contentSize.height);
  };

  const handleFocus = () => commonTextFieldContext?.setIsFocused?.(true);

  const handleBlur = () => commonTextFieldContext?.setIsFocused?.(false);

  return (
    <TextInput
      value={commonTextFieldContext?.value}
      onChangeText={commonTextFieldContext?.onChangeText}
      placeholder={placeholder}
      placeholderTextColor={theme.palette.gray3}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
        commonTextFieldContext?.handleKeyPress?.(e)
      }
      multiline={true}
      underlineColorAndroid="transparent"
      onContentSizeChange={handleInputHeight}
      keyboardType={isAmountField ? 'phone-pad' : 'default'}
      style={[
        commonTextFieldStyles.textInput,
        {height: commonTextFieldContext?.height},
      ]}
    />
  );
}

export function ClearIcon() {
  const commonTextFieldContext = useContext(CommonTextFieldContext);

  return (
    commonTextFieldContext?.value !== '' && (
      <TouchableOpacity onPress={commonTextFieldContext?.handleClearInput}>
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
  const commonTextFieldContext = useContext(CommonTextFieldContext);

  return (
    <DescriptionText
      value={commonTextFieldContext?.value ?? ''}
      setValue={commonTextFieldContext?.setValue!}
      defaultCurrentBalance={defaultCurrentBalance}
    />
  );
}

const CommonTextFieldContext = createContext<CommonTextFieldProps | undefined>(
  undefined,
);

type CommonTextFieldProps = {
  children?: ReactElement[];
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

function CommonTextField({children, defaultValue}: CommonTextFieldProps) {
  const [value, setValue] = useState(formatValue(defaultValue) ?? '');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [height, setHeight] = useState(0);

  const handleClearInput = () => {
    setValue('0원');
    setHeight(56);
  };

  const onChangeText = (text: string) => setValue(formatValue(text));

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
    if (e.nativeEvent.key === 'Backspace') {
      if (value !== '0원') {
        const parsedValue = parseNumberFromString(value).slice(0, -1);

        setValue(`${formatNumberToLocaleString(parsedValue)}원`);
      }

      e.preventDefault();
    }
  };

  return (
    <CommonTextFieldContext.Provider
      value={{
        value,
        setValue,
        isFocused,
        setIsFocused,
        height,
        setHeight,
        handleClearInput,
        onChangeText,
        handleKeyPress,
      }}>
      {children}
    </CommonTextFieldContext.Provider>
  );
}

export const CommonTextFieldBase = Object.assign(CommonTextField, {
  Container,
  Label,
  CustomTextInput,
  ClearIcon,
  TextFieldHelperText,
});

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

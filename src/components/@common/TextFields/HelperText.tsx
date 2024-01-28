import {Dispatch, SetStateAction} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {
  formatNumberToLocaleString,
  formatValue,
  parseNumberFromString,
} from 'utils/formatAmountValue';
import Typography from 'components/@common/Typography';

/**
 * @param value AmountTextField의 value 값
 * @param setValue AmountTextField의 value 값을 변경하는 함수
 * @param defaultCurrentBalance 현재 대차 값
 */
type HelperTextProps = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  defaultCurrentBalance?: string;
};

export default function HelperText({
  value,
  setValue,
  defaultCurrentBalance,
}: HelperTextProps) {
  const calculateCurrentBalance = () => {
    return (
      -parseNumberFromString(defaultCurrentBalance!) +
      Number(parseNumberFromString(value))
    );
  };

  const getCurrentBalance = () => {
    const currentBalance = formatNumberToLocaleString(
      String(calculateCurrentBalance()),
    );

    return currentBalance;
  };

  const handlePressCurrentBalanceButton = () => {
    setValue(formatValue(String(-calculateCurrentBalance())));
  };

  return (
    <View style={helperTextStyles.currentBalanceContainer}>
      <Typography type={'Body2Regular'}>현재 대차 : </Typography>
      <TouchableOpacity>
        <Typography
          type={'Body2Regular'}
          onPress={handlePressCurrentBalanceButton}
          style={helperTextStyles.currentBalanceText}>
          {`${getCurrentBalance()}원`}
        </Typography>
      </TouchableOpacity>
    </View>
  );
}

const helperTextStyles = StyleSheet.create({
  currentBalanceContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  currentBalanceText: {
    borderBottomWidth: 1,
  },
});

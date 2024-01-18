import {Dispatch, SetStateAction} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {
  formatNumberToLocaleString,
  formatValue,
  parseNumberFromString,
} from 'utils/formatAmountValue';
import Typography from 'components/@common/Typography';

type DescriptionTextProps = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  defaultCurrentBalance?: string;
};

export default function DescriptionText({
  value,
  setValue,
  defaultCurrentBalance,
}: DescriptionTextProps) {
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
    <View style={descriptionTextStyles.currentBalanceContainer}>
      <Typography type={'Body2Regular'}>현재 대차 : </Typography>
      <TouchableOpacity>
        <Typography
          type={'Body2Regular'}
          onPress={handlePressCurrentBalanceButton}
          style={descriptionTextStyles.currentBalanceText}>
          {`${getCurrentBalance()}원`}
        </Typography>
      </TouchableOpacity>
    </View>
  );
}

const descriptionTextStyles = StyleSheet.create({
  currentBalanceContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  currentBalanceText: {
    borderBottomWidth: 1,
  },
});

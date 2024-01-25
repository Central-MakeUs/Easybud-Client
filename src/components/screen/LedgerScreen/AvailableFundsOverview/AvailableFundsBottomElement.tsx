import {View, StyleSheet} from 'react-native';
import {theme} from 'styles';
import {formatToLocaleString} from 'utils/formatAmountValue';
import Typography from 'components/@common/Typography';

type AvailableFundsBottomElementProps = {
  availableFundsAmount: number;
};

export default function AvailableFundsBottomElement({
  availableFundsAmount,
}: AvailableFundsBottomElementProps) {
  return (
    <>
      <View style={availableFundsBottomElementStyles.availbleFundsContainer}>
        <Typography type={'Body2Semibold'} color={'gray6'}>
          보민님의 가용자금
        </Typography>
        <Typography type={'Title1Semibold2'}>
          {formatToLocaleString(availableFundsAmount)}원
        </Typography>
      </View>
      <View
        style={availableFundsBottomElementStyles.availableFundsGraphContainer}
      />
    </>
  );
}

const availableFundsBottomElementStyles = StyleSheet.create({
  availbleFundsContainer: {
    width: '100%',
    borderRadius: 18,
    backgroundColor: theme.palette.gray2,
    padding: 18,
    marginBottom: 18,
  },
  availableFundsGraphContainer: {
    borderWidth: 1,
    height: 200,
  },
});

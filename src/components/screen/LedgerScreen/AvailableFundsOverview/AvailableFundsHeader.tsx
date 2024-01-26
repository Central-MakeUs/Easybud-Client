import {StyleSheet, View} from 'react-native';
import {theme} from 'styles';
import {formatToLocaleString} from 'utils/formatAmountValue';
import {AvailableFundsBottomElementProps} from 'components/screen/LedgerScreen/AvailableFundsOverview/AvailableFundsBottomElement';
import Typography from 'components/@common/Typography';

/**
 * @param availableFunds 가용 자금
 */
type AvailableFundsHeaderProps = {
  availableFunds: AvailableFundsBottomElementProps['availableFunds'];
};

export default function AvailableFundsHeader({
  availableFunds,
}: AvailableFundsHeaderProps) {
  return (
    <View style={availableFundsHeaderStyles.availbleFundsContainer}>
      <Typography type={'Body2Semibold'} color={'gray6'}>
        보민님의 가용자금
      </Typography>
      <Typography type={'Title1Semibold2'}>
        {formatToLocaleString(availableFunds)}원
      </Typography>
    </View>
  );
}

const availableFundsHeaderStyles = StyleSheet.create({
  availbleFundsContainer: {
    width: '100%',
    borderRadius: 18,
    backgroundColor: theme.palette.gray2,
    padding: 18,
    marginBottom: 18,
  },
});

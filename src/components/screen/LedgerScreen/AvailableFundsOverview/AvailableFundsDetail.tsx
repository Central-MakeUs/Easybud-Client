import {StyleSheet, View} from 'react-native';
import {formatToLocaleString} from 'utils/formatAmountValue';
import {AvailableFundsBottomElementProps} from 'components/screen/LedgerScreen/AvailableFundsOverview/AvailableFundsBottomElement';
import Typography from 'components/@common/Typography';

/**
 * @param cashAndLiquidAssets 현금 및 현금성 자산
 * @param savingsAccount 보통 예금
 * @param plannedExpenditure 지출 예정 자금
 */
type AvailableFundsDetailProps = {
  cashAndLiquidAssets: AvailableFundsBottomElementProps['cashAndLiquidAssets'];
  savingsAccount: AvailableFundsBottomElementProps['savingsAccount'];
  plannedExpenditure: AvailableFundsBottomElementProps['plannedExpenditure'];
};

export default function AvailableFundsDetail({
  cashAndLiquidAssets,
  savingsAccount,
  plannedExpenditure,
}: AvailableFundsDetailProps) {
  return (
    <View
      style={availableFundsBottomElementStyles.availableFundsGraphContainer}>
      <View style={availableFundsBottomElementStyles.graphLeftCol}>
        <View
          style={{
            borderWidth: 1,
            width: 90,
            height: 90,
            borderRadius: 45,
          }}
        />
      </View>
      <View style={availableFundsBottomElementStyles.graphRightCol}>
        <View style={availableFundsBottomElementStyles.rowContainer}>
          <Typography type={'Body2Semibold'} color={'gray6'}>
            현금 및 현금성 자산
          </Typography>
          <Typography type={'Body2Semibold'} color={'green'}>
            {formatToLocaleString(cashAndLiquidAssets)}원
          </Typography>
        </View>
        <View style={availableFundsBottomElementStyles.rowContainer}>
          <Typography type={'Body2Semibold'} color={'gray6'}>
            보통 예금
          </Typography>
          <Typography type={'Body2Semibold'} color={'green'}>
            {formatToLocaleString(savingsAccount)}원
          </Typography>
        </View>
        <View style={availableFundsBottomElementStyles.rowContainer}>
          <Typography type={'Body2Semibold'} color={'gray6'}>
            지출 예정 자금
          </Typography>
          <Typography type={'Body2Semibold'} color={'pink'}>
            {formatToLocaleString(plannedExpenditure)}원
          </Typography>
        </View>
      </View>
    </View>
  );
}

const availableFundsBottomElementStyles = StyleSheet.create({
  availableFundsGraphContainer: {
    height: 95,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  graphLeftCol: {
    width: '35%',
    height: '100%',
  },
  graphRightCol: {
    width: '65%',
    height: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

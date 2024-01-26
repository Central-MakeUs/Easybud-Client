import {View, StyleSheet} from 'react-native';
import {theme} from 'styles';
import {formatToLocaleString} from 'utils/formatAmountValue';
import Typography from 'components/@common/Typography';

/**
 * @param availableFunds 가용 자금
 * @param cashAndLiquidAssets 현금 및 현금성 자산
 * @param savingsAccount 보통 예금
 * @param plannedExpenditure 지출 예정 자금
 */
type AvailableFundsBottomElementProps = {
  availableFunds: number;
  cashAndLiquidAssets: number;
  savingsAccount: number;
  plannedExpenditure: number;
};

export default function AvailableFundsBottomElement({
  availableFunds,
  cashAndLiquidAssets,
  savingsAccount,
  plannedExpenditure,
}: AvailableFundsBottomElementProps) {
  return (
    <>
      <View style={availableFundsBottomElementStyles.availbleFundsContainer}>
        <Typography type={'Body2Semibold'} color={'gray6'}>
          보민님의 가용자금
        </Typography>
        <Typography type={'Title1Semibold2'}>
          {formatToLocaleString(availableFunds)}원
        </Typography>
      </View>
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

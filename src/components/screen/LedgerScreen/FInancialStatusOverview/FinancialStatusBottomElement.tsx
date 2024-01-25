import Typography from 'components/@common/Typography';
import {StyleSheet, View} from 'react-native';
import {theme} from 'styles';
import {formatToLocaleString} from 'utils/formatAmountValue';

type FinacialStatusBottomElementProps = {
  networthAmount: number;
  assetAmount: number;
  debtAmount: number;
};

export default function FinacialStatusBottomElement({
  networthAmount,
  assetAmount,
  debtAmount,
}: FinacialStatusBottomElementProps) {
  return (
    <View>
      <View style={finacialStatusBottomElementStyles.networthContainer}>
        <Typography type={'Body2Semibold'} color={'gray6'}>
          보민님의 순자산
        </Typography>
        <Typography type={'Title1Semibold2'}>
          {formatToLocaleString(networthAmount)}원
        </Typography>
      </View>
      <View style={finacialStatusBottomElementStyles.assetDebtContainer}>
        <View style={finacialStatusBottomElementStyles.assetContainer}>
          <Typography type={'Body1Semibold'} color={'gray6'}>
            자산
          </Typography>
          <Typography type={'Body1Semibold'} color={'green'}>
            {formatToLocaleString(assetAmount)}원
          </Typography>
        </View>
        <View style={finacialStatusBottomElementStyles.debtContainer}>
          <Typography type={'Body1Semibold'} color={'gray6'}>
            부채
          </Typography>
          <Typography type={'Body1Semibold'} color={'pink'}>
            {formatToLocaleString(debtAmount)}원
          </Typography>
        </View>
      </View>
    </View>
  );
}

const finacialStatusBottomElementStyles = StyleSheet.create({
  networthContainer: {
    width: '100%',
    borderRadius: 18,
    backgroundColor: theme.palette.gray2,
    padding: 18,
    marginBottom: 18,
  },
  assetDebtContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  assetContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  debtContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

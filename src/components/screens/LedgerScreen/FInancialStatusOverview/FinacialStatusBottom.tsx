import {StyleSheet, View} from 'react-native';
import {useRecoilValue} from 'recoil';
import {theme} from 'styles';
import {userInfoState} from 'libs/recoil/states/userInfo';
import {formatNullableAmount} from 'utils/formatAmountValue';
import Typography from 'components/@common/Typography';

type FinacialStatusBottomElementProps = {
  networthAmount: number;
  assetAmount: number;
  debtAmount: number;
};

export default function FinacialStatusBottom({
  networthAmount,
  assetAmount,
  debtAmount,
}: FinacialStatusBottomElementProps) {
  const {username} = useRecoilValue(userInfoState);

  return (
    <View>
      <View style={finacialStatusBottomElementStyles.networthContainer}>
        <Typography type={'Body2Semibold'} color={'gray6'}>
          {username}님의 순자산
        </Typography>
        <Typography type={'Title1Semibold2'}>
          {formatNullableAmount(networthAmount)}원
        </Typography>
      </View>
      <View style={finacialStatusBottomElementStyles.assetDebtContainer}>
        <View style={finacialStatusBottomElementStyles.assetContainer}>
          <Typography type={'Body1Semibold'} color={'gray6'}>
            자산
          </Typography>
          <Typography type={'Body1Semibold'} color={'green'}>
            {formatNullableAmount(assetAmount)}원
          </Typography>
        </View>
        <View style={finacialStatusBottomElementStyles.debtContainer}>
          <Typography type={'Body1Semibold'} color={'gray6'}>
            부채
          </Typography>
          <Typography type={'Body1Semibold'} color={'pink'}>
            {formatNullableAmount(debtAmount)}원
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

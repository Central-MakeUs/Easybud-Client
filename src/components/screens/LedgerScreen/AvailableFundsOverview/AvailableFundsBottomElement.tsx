import {useRecoilValue} from 'recoil';
import {View, StyleSheet} from 'react-native';
import {theme} from 'styles';
import {userInfoState} from 'libs/recoil/states/userInfo';
import {formatToLocaleString} from 'utils/formatAmountValue';
import Typography from 'components/@common/Typography';

/**
 * @param availableFunds 가용 자금
 * @param cash 현금
 * @param savingsAccount 보통 예금
 * @param plannedExpenditure 지출 예정 자금
 */
export type AvailableFundsBottomElementProps = {
  availableFunds: number;
  cash: number;
  savingsAccount: number;
  plannedExpenditure: number;
};

export default function AvailableFundsBottomElement({
  availableFunds,
  cash,
  savingsAccount,
  plannedExpenditure,
}: AvailableFundsBottomElementProps) {
  const {username} = useRecoilValue(userInfoState);

  return (
    <View>
      <View style={availableFundsBottomElementStyles.availableFundsContainer}>
        <Typography type={'Body2Semibold'} color={'gray6'}>
          {username}님의 가용자금
        </Typography>
        <Typography type={'Title1Semibold2'}>
          {formatToLocaleString(availableFunds)}원
        </Typography>
      </View>
      <View style={availableFundsBottomElementStyles.assetDebtContainer}>
        <View style={availableFundsBottomElementStyles.cashContainer}>
          <Typography type={'Body1Semibold'} color={'gray6'}>
            현금
          </Typography>
          <Typography type={'Body1Semibold'} color={'green'}>
            {formatToLocaleString(cash)}원
          </Typography>
        </View>
        <View style={availableFundsBottomElementStyles.savingsAccountContainer}>
          <Typography type={'Body1Semibold'} color={'gray6'}>
            보통예금
          </Typography>
          <Typography type={'Body1Semibold'} color={'green'}>
            {formatToLocaleString(savingsAccount)}원
          </Typography>
        </View>
        <View
          style={availableFundsBottomElementStyles.plannedExpenditureContainer}>
          <Typography type={'Body1Semibold'} color={'gray6'}>
            카드대금
          </Typography>
          <Typography type={'Body1Semibold'} color={'pink'}>
            {formatToLocaleString(plannedExpenditure)}원
          </Typography>
        </View>
      </View>
    </View>
  );
}

const availableFundsBottomElementStyles = StyleSheet.create({
  availableFundsContainer: {
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
  cashContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  savingsAccountContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  plannedExpenditureContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

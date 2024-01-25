import Typography from 'components/@common/Typography';
import {StyleSheet, View} from 'react-native';
import {theme} from 'styles';
import {formatToLocaleString} from 'utils/formatAmountValue';

type NetWorthOverviewProps = {
  amount: number;
};

export default function NetWorthOverview({amount}: NetWorthOverviewProps) {
  return (
    <View style={netWorthOverviewStyles.container}>
      <Typography type={'Body2Semibold'} color={'gray6'}>
        보민님의 순자산
      </Typography>
      <Typography type={'Title1Semibold2'}>
        {formatToLocaleString(amount)}원
      </Typography>
    </View>
  );
}

const netWorthOverviewStyles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 18,
    backgroundColor: theme.palette.gray2,
    padding: 18,
  },
});

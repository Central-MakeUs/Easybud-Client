import {StyleSheet, View} from 'react-native';
import {theme} from 'styles';
import {textColor} from 'constants/TransactionScreen';
import Typography from 'components/@common/Typography';

const dummyFinancialDatas = [
  {
    name: '수익',
    amount: '57,183,436원',
  },
  {
    name: '비용',
    amount: '69,950,244원',
  },
  {
    name: '손익',
    amount: '7,800,858원',
  },
] as const;

export default function FinancialOverview() {
  return (
    <View style={financialOverviewStyles.container}>
      {dummyFinancialDatas.map((data, index) => (
        <View style={financialOverviewStyles.columnContainer} key={index}>
          <View style={financialOverviewStyles.textContainer}>
            <Typography
              type={'Body2Regular'}
              color={'gray4'}
              style={financialOverviewStyles.text}>
              {data.name}
            </Typography>
            <Typography type={'Body2Regular'} color={textColor[data.name]}>
              {data.amount}
            </Typography>
          </View>
          {index !== 2 && <Typography color={'gray4'}>{'|'}</Typography>}
        </View>
      ))}
    </View>
  );
}

const financialOverviewStyles = StyleSheet.create({
  container: {
    height: 53,
    backgroundColor: theme.palette.white,
    borderRadius: 18,
    marginBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  text: {
    textAlign: 'center',
  },
});

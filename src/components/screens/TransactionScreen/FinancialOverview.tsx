import {StyleSheet, View} from 'react-native';
import {theme} from 'styles';
import {formatToLocaleString} from 'utils/formatAmountValue';
import Typography from 'components/@common/Typography';
import {IncomeStatusSummaryKeyVariant} from 'types/screens/TransactionScreen';
import {
  incomeStatusSummaryText,
  incomeStatusSummaryTextColor,
} from 'constants/screens/TransactionScreen';
import {useGetIncomeStatusByMonthQuery} from 'hooks/queries/TransactionScreen/useGetIncomeStatusByMonthQuery';

/**
 * @param currentDate 현재 날짜
 */
type FinancialOverviewProps = {
  currentDate: Date;
};

export default function FinancialOverview({
  currentDate,
}: FinancialOverviewProps) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;

  const incomeStatusByMonth = useGetIncomeStatusByMonthQuery(year, month);

  return (
    <View style={financialOverviewStyles.container}>
      {Object.entries(incomeStatusByMonth).map(([name, value], index) => (
        <View style={financialOverviewStyles.columnContainer} key={name}>
          <View style={financialOverviewStyles.textContainer}>
            <Typography
              type={'Body2Regular'}
              color={'gray4'}
              style={financialOverviewStyles.text}>
              {
                incomeStatusSummaryText[
                  name as IncomeStatusSummaryKeyVariant[number]
                ]
              }
            </Typography>
            <Typography
              type={'Body2Regular'}
              color={
                incomeStatusSummaryTextColor[
                  name as IncomeStatusSummaryKeyVariant[number]
                ]
              }
              style={financialOverviewStyles.text}>
              {formatToLocaleString(value)}원
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
    flex: 1,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 10,
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
});

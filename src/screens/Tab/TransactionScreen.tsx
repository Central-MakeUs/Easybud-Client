import {useCallback, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import 'dayjs/locale/ko';
import {theme} from 'styles';
import {formatDateByDash} from 'utils/formatDate';
import {useGetTransactionByDateQuery} from 'hooks/queries/TransactionScreen/useGetTransactionByDateQuery';
import FinancialCalendar from 'components/screens/TransactionScreen/FinancialCalendar';
import FinancialOverview from 'components/screens/TransactionScreen/FinancialOverview';
import MonthHeader from 'components/screens/TransactionScreen/MonthHeader';
import ScreenContainer from 'components/@common/ScreenContainer';
import TransactionList from 'components/@common/TransactionList';

export default function TransactionScreen() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const formattedDate = formatDateByDash(currentDate);
  const transactionList = useGetTransactionByDateQuery(formattedDate);

  useFocusEffect(
    useCallback(() => {
      setCurrentDate(new Date());
    }, []),
  );

  return (
    <ScreenContainer
      contentContainerStyle={transactionScreenStyles.contentContainer}>
      <MonthHeader currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <FinancialOverview currentDate={currentDate} />
      <FinancialCalendar currentDate={currentDate} />
      <View style={transactionScreenStyles.divider} />
      <TransactionList transactionList={transactionList} />
    </ScreenContainer>
  );
}

const transactionScreenStyles = StyleSheet.create({
  contentContainer: {
    paddingTop: 0,
  },
  divider: {
    borderWidth: 1,
    borderColor: theme.palette.gray2,
    marginVertical: 15,
  },
});

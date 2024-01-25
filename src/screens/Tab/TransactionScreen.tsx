import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import 'dayjs/locale/ko';
import {theme} from 'styles';
import ScreenContainer from 'components/@common/ScreenContainer';
import FinancialCalendar from 'components/screen/TransactionScreen/FinancialCalendar';
import FinancialOverview from 'components/screen/TransactionScreen/FinancialOverview';
import MonthHeader from 'components/screen/TransactionScreen/MonthHeader';
import TransactionList from 'components/screen/TransactionScreen/TransactionList';

export default function TransactionScreen() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <ScreenContainer contentContainerStyle={{paddingTop: 0}}>
      <MonthHeader currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <FinancialOverview />
      <FinancialCalendar currentDate={currentDate} />
      <View style={transactionScreenStyles.divider} />
      <TransactionList />
    </ScreenContainer>
  );
}

const transactionScreenStyles = StyleSheet.create({
  divider: {
    borderWidth: 1,
    borderColor: theme.palette.gray2,
    marginVertical: 15,
  },
});

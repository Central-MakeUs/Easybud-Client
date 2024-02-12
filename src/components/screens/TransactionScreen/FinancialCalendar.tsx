import {Dispatch, SetStateAction} from 'react';
import {View, StyleSheet} from 'react-native';
import {Calendar} from 'react-native-big-calendar';
import {theme} from 'styles';
import {getTransactionEventData} from 'utils/getTransactionEventData';
import useGetIncomeSummaryByDateQuery from 'hooks/queries/TransactionScreen/useGetIncomeSummaryByDateQuery';
import {calendarTheme} from 'constants/screens/TransactionScreen';
import DayHeader from 'components/screens/TransactionScreen/DayHeader';

/**
 * @param currentDate 현재 날짜
 * @param setCurrentDate 현재 날짜를 변경하는 함수
 */
type FinancialCalendarProps = {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
};

export default function FinancialCalendar({
  currentDate,
  setCurrentDate,
}: FinancialCalendarProps) {
  const {year, month} = {
    year: new Date(currentDate).getFullYear(),
    month: new Date(currentDate).getMonth() + 1,
  };

  const incomeStatusByMonth = useGetIncomeSummaryByDateQuery(year, month);

  return (
    <View style={financialCalendarStyles.container}>
      <Calendar
        events={getTransactionEventData(incomeStatusByMonth)}
        height={310}
        mode="month"
        locale="ko"
        date={currentDate}
        bodyContainerStyle={financialCalendarStyles.bodyContainer}
        theme={calendarTheme}
        eventCellStyle={financialCalendarStyles.eventCel}
        renderHeaderForMonthView={() => <DayHeader />}
        onPressCell={date => setCurrentDate(date)}
        onLongPressCell={date => setCurrentDate(date)}
        onPressEvent={event => setCurrentDate(event.start)}
      />
    </View>
  );
}

const financialCalendarStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.white,
    borderRadius: 18,
    borderColor: 'transparent',
  },
  bodyContainer: {
    borderColor: 'transparent',
  },
  eventCel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderColor: theme.palette.white,
    backgroundColor: theme.palette.white,
    shadowColor: 'transparent',
    shadowOpacity: 0,
  },
});

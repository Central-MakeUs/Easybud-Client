import {View, StyleSheet} from 'react-native';
import {Calendar} from 'react-native-big-calendar';
import {theme} from 'styles';
import {formatToLocaleString} from 'utils/formatAmountValue';
import {calendarTheme} from 'constants/screens/TransactionScreen';
import DayHeader from 'components/screens/TransactionScreen/DayHeader';
import {Dispatch, SetStateAction} from 'react';

const datas = [
  {
    date: '2024-02-01',
    profitLoss: -123123,
  },
  {
    date: '2024-02-02',
    profitLoss: 234,
  },
  {
    date: '2024-02-03',
    profitLoss: 0,
  },
  {
    date: '2024-02-04',
    profitLoss: 0,
  },
  {
    date: '2024-02-05',
    profitLoss: 0,
  },
];

const getEventData = (
  dataList: {date: string; profitLoss: number}[],
): {title: string; start: Date; end: Date}[] =>
  dataList.map(data => ({
    title:
      data.profitLoss >= 0
        ? `+${formatToLocaleString(data.profitLoss)}`
        : `-${formatToLocaleString(data.profitLoss)}`,
    start: new Date(
      Number(data.date.slice(0, 4)),
      Number(data.date.slice(5, 7)) - 1,
      Number(data.date.slice(8, 10)),
      0,
      0,
    ),
    end: new Date(
      Number(data.date.slice(0, 4)),
      Number(data.date.slice(5, 7)) - 1,
      Number(data.date.slice(8, 10)),
      23,
      59,
    ),
  }));

/**
 * @param currentDate 현재 날짜
 */
type FinancialCalendarProps = {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
};

export default function FinancialCalendar({
  currentDate,
  setCurrentDate,
}: FinancialCalendarProps) {
  return (
    <View style={financialCalendarStyles.container}>
      <Calendar
        events={getEventData(datas)}
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

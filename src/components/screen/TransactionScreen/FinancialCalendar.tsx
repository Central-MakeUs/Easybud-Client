import {View, StyleSheet} from 'react-native';
import {Calendar} from 'react-native-big-calendar';
import {theme} from 'styles';
import {calendarTheme} from 'constants/screens/TransactionScreen';
import DayHeader from 'components/screen/TransactionScreen/DayHeader';

const dummyEvents = [
  {
    title: '-151,900',
    start: new Date(2024, 0, 1, 0, 0),
    end: new Date(2024, 0, 1, 23, 59),
  },
  {
    title: '-151,900',
    start: new Date(2024, 0, 2, 0, 0),
    end: new Date(2024, 0, 2, 23, 59),
  },
  {
    title: '-151,900',
    start: new Date(2024, 0, 3, 0, 0),
    end: new Date(2024, 0, 3, 23, 59),
  },
  {
    title: '-151,900',
    start: new Date(2024, 0, 4, 0, 0),
    end: new Date(2024, 0, 4, 23, 59),
  },
  {
    title: '-151,900',
    start: new Date(2024, 0, 5, 0, 0),
    end: new Date(2024, 0, 5, 23, 59),
  },
  {
    title: '-151,900',
    start: new Date(2024, 0, 6, 0, 0),
    end: new Date(2024, 0, 6, 23, 59),
  },
  {
    title: '-151,900',
    start: new Date(2024, 0, 7, 0, 0),
    end: new Date(2024, 0, 7, 23, 59),
  },
  {
    title: '-151,900',
    start: new Date(2024, 0, 8, 0, 0),
    end: new Date(2024, 0, 8, 23, 59),
  },
  {
    title: '-151,900',
    start: new Date(2024, 0, 9, 0, 0),
    end: new Date(2024, 0, 9, 23, 59),
  },
  {
    title: '-151,900',
    start: new Date(2024, 0, 10, 0, 0),
    end: new Date(2024, 0, 10, 23, 59),
  },
];

/**
 * @param currentDate 현재 날짜
 */
type FinancialCalendarProps = {
  currentDate: Date;
};

export default function FinancialCalendar({
  currentDate,
}: FinancialCalendarProps) {
  return (
    <View style={financialCalendarStyles.container}>
      <Calendar
        events={dummyEvents}
        height={310}
        mode="month"
        locale="ko"
        date={currentDate}
        bodyContainerStyle={financialCalendarStyles.bodyContainer}
        theme={calendarTheme}
        eventCellStyle={financialCalendarStyles.eventCel}
        renderHeaderForMonthView={() => <DayHeader />}
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
    borderWidth: 0,
    borderColor: theme.palette.white,
    backgroundColor: theme.palette.white,
    shadowColor: 'transparent',
    shadowOpacity: 0,
  },
});

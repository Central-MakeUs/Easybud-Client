import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Calendar} from 'react-native-big-calendar';
import 'dayjs/locale/ko';
import {theme} from 'styles';
import {typographyStyles} from 'styles/typography';
import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import DayHeader from 'components/TransactionScreen/DayHeader';
import MonthHeader from 'components/TransactionScreen/MonthHeader';

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

export default function TransactionScreen() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <ScreenContainer contentContainerStyle={{paddingVertical: 0}}>
      <MonthHeader currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <View style={transactionScreenStyles.financialOverviewContainer}>
        <View style={transactionScreenStyles.financialOverviewColContainer}>
          <Typography type={'Body2Regular'} color={'gray4'}>
            수익
          </Typography>
          <Typography type={'Body2Regular'} color={'green'}>
            57,183,436원
          </Typography>
        </View>
        <Typography color={'gray4'}>{'|'}</Typography>
        <View style={transactionScreenStyles.financialOverviewColContainer}>
          <Typography type={'Body2Regular'} color={'gray4'}>
            비용
          </Typography>
          <Typography type={'Body2Regular'} color={'pink'}>
            69,950,244원
          </Typography>
        </View>
        <Typography color={'gray4'}>{'|'}</Typography>
        <View style={transactionScreenStyles.financialOverviewColContainer}>
          <Typography type={'Body2Regular'} color={'gray4'}>
            손익
          </Typography>
          <Typography type={'Body2Regular'} color={'gray6'}>
            7,800,858원
          </Typography>
        </View>
      </View>
      <View style={transactionScreenStyles.calendarContainer}>
        <Calendar
          events={dummyEvents}
          height={310}
          mode="month"
          locale="ko"
          date={currentDate}
          bodyContainerStyle={{borderColor: 'transparent'}}
          theme={{
            palette: {
              primary: {
                main: theme.palette.primary,
                contrastText: theme.palette.gray5,
              },
            },
            typography: {
              fontFamily: typographyStyles.Body4Regular.fontFamily,
              xs: {
                fontSize: typographyStyles.Body4Regular.fontSize,
                fontWeight: typographyStyles.Body4Regular.fontWeight,
              },
              sm: {
                fontSize: typographyStyles.Body4Semibold.fontSize,
                fontWeight: typographyStyles.Body4Semibold.fontWeight,
              },
            },
          }}
          eventCellStyle={{
            borderWidth: 0,
            borderColor: theme.palette.white,
            backgroundColor: theme.palette.white,
            shadowColor: 'transparent',
            shadowOpacity: 0,
          }}
          renderHeaderForMonthView={() => <DayHeader />}
        />
      </View>
    </ScreenContainer>
  );
}

const transactionScreenStyles = StyleSheet.create({
  monthContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    height: 50,
  },
  financialOverviewContainer: {
    height: 53,
    backgroundColor: theme.palette.white,
    borderRadius: 18,
    marginBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  financialOverviewColContainer: {
    alignItems: 'center',
  },
  calendarContainer: {
    backgroundColor: theme.palette.white,
    borderRadius: 18,
    borderColor: 'transparent',
  },
});

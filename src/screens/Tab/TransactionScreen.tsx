import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Calendar} from 'react-native-big-calendar';
import 'dayjs/locale/ko';
import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import Icon from 'components/@common/Icon';
import {theme} from 'styles';
import {typographyStyles} from 'styles/typography';

const events = [
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

const CustomHeader = () => {
  return (
    <View style={customHeaderStyles.container}>
      <View style={{flex: 1}}>
        <Typography
          type={'Body3Regular'}
          color={'gray4'}
          style={{textAlign: 'center'}}>
          월
        </Typography>
      </View>
      <View style={{flex: 1}}>
        <Typography
          type={'Body3Regular'}
          color={'gray4'}
          style={{textAlign: 'center'}}>
          화
        </Typography>
      </View>
      <View style={{flex: 1}}>
        <Typography
          type={'Body3Regular'}
          color={'gray4'}
          style={{textAlign: 'center'}}>
          수
        </Typography>
      </View>
      <View style={{flex: 1}}>
        <Typography
          type={'Body3Regular'}
          color={'gray4'}
          style={{textAlign: 'center'}}>
          목
        </Typography>
      </View>
      <View style={{flex: 1}}>
        <Typography
          type={'Body3Regular'}
          color={'gray4'}
          style={{textAlign: 'center'}}>
          금
        </Typography>
      </View>
      <View style={{flex: 1}}>
        <Typography
          type={'Body3Regular'}
          color={'gray4'}
          style={{textAlign: 'center'}}>
          토
        </Typography>
      </View>
      <View style={{flex: 1}}>
        <Typography
          type={'Body3Regular'}
          color={'gray4'}
          style={{textAlign: 'center'}}>
          일
        </Typography>
      </View>
    </View>
  );
};

const customHeaderStyles = StyleSheet.create({
  container: {
    borderTopRadius: 18,
    height: 26,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: theme.palette.gray7,
  },
});

export default function TransactionScreen() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePressPrevMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);

      if (newDate.getMonth() < 0) {
        newDate.setFullYear(newDate.getFullYear() - 1);
        newDate.setMonth(11);
      }

      return newDate;
    });
  };

  const handlePressNextMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);

      if (newDate.getMonth() > 11) {
        newDate.setFullYear(newDate.getFullYear() + 1);
        newDate.setMonth(0); // 0부터 시작하므로 0은 1월을 나타냅니다.
      }

      return newDate;
    });
  };

  return (
    <ScreenContainer contentContainerStyle={{paddingVertical: 0}}>
      <View>
        <View style={transactionScreenStyles.monthContainer}>
          <Icon
            name={'ArrowLeftSmall'}
            fill={'gray4'}
            onPress={handlePressPrevMonth}
          />
          <Typography
            type={'Title1Bold'}
            color={'gray4'}
            style={{
              marginBottom: 3,
              width: 50,
              textAlign: 'center',
            }}>
            {currentDate.getMonth() + 1}월
          </Typography>
          <Icon
            name={'ArrowRightSmall'}
            fill={'gray4'}
            onPress={handlePressNextMonth}
          />
        </View>
      </View>
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
          events={events}
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
          renderHeaderForMonthView={() => <CustomHeader />}
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

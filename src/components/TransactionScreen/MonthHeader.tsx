import {Dispatch, SetStateAction} from 'react';
import {View, StyleSheet} from 'react-native';
import {updateMonth} from 'utils/formatDate';
import Icon from 'components/@common/Icon';
import Typography from 'components/@common/Typography';

/**
 * @param currentDate 현재 날짜
 * @param setCurrentDate 현재 날짜 값을 변경하는 함수
 */
type MonthHeaderProps = {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
};

export default function MonthHeader({
  currentDate,
  setCurrentDate,
}: MonthHeaderProps) {
  const handlePressPrevMonth = () => {
    setCurrentDate(prevDate => updateMonth(prevDate, -1));
  };

  const handlePressNextMonth = () => {
    setCurrentDate(prevDate => updateMonth(prevDate, 1));
  };

  return (
    <View style={monthHeaderStyles.container}>
      <Icon
        name={'ArrowLeftSmall'}
        fill={'gray4'}
        onPress={handlePressPrevMonth}
      />
      <Typography
        type={'Title1Bold'}
        color={'gray4'}
        style={monthHeaderStyles.text}>
        {currentDate.getMonth() + 1}월
      </Typography>
      <Icon
        name={'ArrowRightSmall'}
        fill={'gray4'}
        onPress={handlePressNextMonth}
      />
    </View>
  );
}

const monthHeaderStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    height: 50,
  },
  text: {
    marginBottom: 3,
    width: 50,
    textAlign: 'center',
  },
});

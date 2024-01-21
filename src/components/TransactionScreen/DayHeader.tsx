import {View, StyleSheet} from 'react-native';
import {theme} from 'styles';
import {days} from 'constants/screens/TransactionScreen';
import Typography from 'components/@common/Typography';

export default function DayHeader() {
  return (
    <View style={dayHeaderStyles.container}>
      {days.map(day => (
        <View style={dayHeaderStyles.day} key={day}>
          <Typography
            type={'Body3Regular'}
            color={'gray4'}
            style={dayHeaderStyles.text}>
            {day}
          </Typography>
        </View>
      ))}
    </View>
  );
}

const dayHeaderStyles = StyleSheet.create({
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
  day: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
});

import {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Typography from 'components/@common/Typography';

const getFormattedDate = (date: Date): string => {
  const amPm = date.getHours() < 12 ? '오전' : '오후';

  return `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일 ${amPm} ${
    date.getHours() % 12 || 12
  }:${date.getMinutes()}`;
};

export default function DatePicker() {
  const [formattedDate, setFormattedDate] = useState<string>(
    getFormattedDate(new Date()),
  );
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);

  const handlePressDateTimePicker = () => {
    setIsDateTimePickerVisible(true);
  };

  const handleCancelDateTimePicker = () => {
    setIsDateTimePickerVisible(false);
  };

  const handleConfirmDateTimePicker = (date: Date) => {
    setFormattedDate(getFormattedDate(date));
  };

  return (
    <View style={dateStyles.container}>
      <Typography type={'Body1Semibold'} color={'gray4'}>
        날짜
      </Typography>
      <TouchableOpacity
        onPress={handlePressDateTimePicker}
        style={dateStyles.rightCol}>
        <Typography type={'Body1Semibold'} color={'gray5'}>
          {formattedDate}
        </Typography>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDateTimePickerVisible}
        mode="datetime"
        onConfirm={handleConfirmDateTimePicker}
        onCancel={handleCancelDateTimePicker}
      />
    </View>
  );
}

const dateStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 68,
    borderWidth: 1,
    borderColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightCol: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: 200,
  },
});

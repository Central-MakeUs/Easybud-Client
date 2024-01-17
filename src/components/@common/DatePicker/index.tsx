import {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {theme} from 'styles';
import {getFormattedDate} from 'utils/formatDate';
import Typography from 'components/@common/Typography';

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
    borderBottomColor: theme.palette.gray2,
    borderWidth: 1,
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
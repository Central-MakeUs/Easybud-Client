import {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {getFormattedDate} from 'utils/formatDate';
import InputForm from 'components/@common/InputForm';

type DatePickerProps = {date: Date; updateDate: (date: Date) => void};

export default function DatePicker({date, updateDate}: DatePickerProps) {
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);

  const handlePressDateTimePicker = () => {
    setIsDateTimePickerVisible(true);
  };

  const handleCancelDateTimePicker = () => {
    setIsDateTimePickerVisible(false);
  };

  const handleConfirmDateTimePicker = (updatedDate: Date) => {
    setIsDateTimePickerVisible(false);
    updateDate(updatedDate);
  };

  return (
    <InputForm
      label={'날짜'}
      placeholder="날짜를 선택하세요"
      onPress={handlePressDateTimePicker}
      value={getFormattedDate(date)}
      bottomSheet={
        <DateTimePickerModal
          isVisible={isDateTimePickerVisible}
          mode="date"
          date={date}
          onConfirm={handleConfirmDateTimePicker}
          onCancel={handleCancelDateTimePicker}
        />
      }
    />
  );
}

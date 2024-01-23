import {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {getFormattedDate} from 'utils/formatDate';
import CommonSelectItem from 'components/@common/CommonSelectItem';

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
    setIsDateTimePickerVisible(false);
    setFormattedDate(getFormattedDate(date));
  };

  return (
    <CommonSelectItem
      label={'날짜'}
      handlePressSelectItem={handlePressDateTimePicker}
      value={formattedDate}
      placeholder="날짜를 선택하세요"
      bottomSheet={
        <DateTimePickerModal
          isVisible={isDateTimePickerVisible}
          mode="date"
          onConfirm={handleConfirmDateTimePicker}
          onCancel={handleCancelDateTimePicker}
        />
      }
    />
  );
}

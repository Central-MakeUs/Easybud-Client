import {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {getFormattedDate} from 'utils/formatDate';
import CommonSelectItem from 'components/@common/CommonSelectItem';

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
    <CommonSelectItem
      label={'날짜'}
      variant={'gray'}
      handlePressSelectItem={handlePressDateTimePicker}
      value={getFormattedDate(date)}
      placeholder="날짜를 선택하세요"
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

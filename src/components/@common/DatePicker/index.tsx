import {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {getFormattedDate} from 'utils/formatDate';
import InputForm from 'components/@common/InputForm';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
    <>
      <TouchableOpacity onPress={handlePressDateTimePicker}>
        <InputForm
          label={'날짜'}
          value={getFormattedDate(date)}
          placeholder={'날짜를 선택하세요'}
        />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDateTimePickerVisible}
        mode="date"
        date={date}
        onConfirm={handleConfirmDateTimePicker}
        onCancel={handleCancelDateTimePicker}
      />
    </>
  );
}

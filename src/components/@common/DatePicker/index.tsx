import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {getFormattedDate} from 'utils/formatDate';
import InputForm from 'components/@common/InputForm';
import {useState} from 'react';

type DatePickerProps = {date: Date; updateDate: (date: Date) => void};

export default function DatePicker({date, updateDate}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const handleConfirmDateTimePicker = (updatedDate: Date) => {
    close();
    updateDate(updatedDate);
  };

  return (
    <>
      <InputForm
        onPress={open}
        label={'날짜'}
        value={getFormattedDate(date)}
        placeholder={'날짜를 선택하세요'}
      />
      <DateTimePickerModal
        isVisible={isOpen}
        mode="date"
        date={date}
        onConfirm={handleConfirmDateTimePicker}
        onCancel={close}
      />
    </>
  );
}

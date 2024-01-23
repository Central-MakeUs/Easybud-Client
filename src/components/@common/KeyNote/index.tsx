import {useState} from 'react';
import {sliceString} from 'utils/sliceString';
import CommonSelectItem from 'components/@common/CommonSelectItem';
import InputBottomSheet from 'components/@common/InputBottomSheet';

export default function KeyNote() {
  const [keyNoteText, setKeyNoteText] = useState('');
  const [keyNoteInputText, setKeyNoteInputText] = useState('');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handlePressSelectItem = () => setIsBottomSheetOpen(true);

  return (
    <CommonSelectItem
      label={'적요'}
      handlePressSelectItem={handlePressSelectItem}
      value={keyNoteText || sliceString(keyNoteText, 30)}
      placeholder="적요를 작성하세요"
      bottomSheet={
        <InputBottomSheet
          isBottomSheetOpen={isBottomSheetOpen}
          setIsBottomSheetOpen={setIsBottomSheetOpen}
          inputText={keyNoteInputText}
          setText={setKeyNoteText}
          setInputText={setKeyNoteInputText}
        />
      }
    />
  );
}

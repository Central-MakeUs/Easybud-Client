import {useState} from 'react';
import {sliceString} from 'utils/sliceString';
import KeyNoteBottomSheet from 'components/@common/KeyNote/KeyNoteBottomSheet';
import CommonSelectItem from 'components/@common/CommonSelectItem';

export default function KeyNote() {
  const [keyNoteText, setKeyNoteText] = useState('');
  const [keyNoteInputText, setKeyNoteInputText] = useState('');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handlePressSelectItem = () => setIsBottomSheetOpen(true);

  const text = keyNoteText === '' ? '입력하세요' : sliceString(keyNoteText, 30);

  return (
    <CommonSelectItem
      label={'적요'}
      variant={'gray'}
      handlePressSelectItem={handlePressSelectItem}
      value={text}
      bottomSheet={
        <KeyNoteBottomSheet
          isBottomSheetOpen={isBottomSheetOpen}
          setIsBottomSheetOpen={setIsBottomSheetOpen}
          keyNoteInputText={keyNoteInputText}
          setKeyNoteText={setKeyNoteText}
          setKeyNoteInputText={setKeyNoteInputText}
        />
      }
    />
  );
}

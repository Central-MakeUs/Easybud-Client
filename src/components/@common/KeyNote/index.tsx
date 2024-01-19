import {useState} from 'react';
import {sliceString} from 'utils/sliceString';
import KeyNoteBottomSheet from 'components/@common/KeyNote/KeyNoteBottomSheet';
import CommonSelectItem from 'components/@common/CommonSelectItem';

export default function KeyNote() {
  const [keyNoteText, setKeyNoteText] = useState('');
  const [keyNoteInputText, setKeyNoteInputText] = useState('');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handlePressSelectItem = () => setIsBottomSheetOpen(true);

  return (
    <CommonSelectItem
      label={'적요'}
      variant={'gray'}
      handlePressSelectItem={handlePressSelectItem}
      value={keyNoteText || sliceString(keyNoteText, 30)}
      placeholder="적요를 작성하세요"
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

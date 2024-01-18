import {Dispatch, SetStateAction} from 'react';
import {View, StyleSheet} from 'react-native';
import BottomSheet from 'components/@common/BottomSheet';
import TextArea from 'components/@common/KeyNote/TextArea';
import Button from 'components/@common/Buttons/Button';

type KeyNoteBottmSheetProps = {
  isBottomSheetOpen: boolean;
  setIsBottomSheetOpen: Dispatch<SetStateAction<boolean>>;
  keyNoteInputText: string;
  setKeyNoteText: Dispatch<SetStateAction<string>>;
  setKeyNoteInputText: Dispatch<SetStateAction<string>>;
};

export default function KeyNoteBottomSheet({
  isBottomSheetOpen,
  setIsBottomSheetOpen,
  setKeyNoteInputText,
  keyNoteInputText,
  setKeyNoteText,
}: KeyNoteBottmSheetProps) {
  const handlePressCompleteButton = () => {
    keyNoteInputText.length && setKeyNoteText(keyNoteInputText);
    setIsBottomSheetOpen(false);
  };

  return (
    <BottomSheet
      isBottomSheetOpen={isBottomSheetOpen}
      setIsBottomSheetOpen={setIsBottomSheetOpen}
      children={
        <View style={keyNoteStyles.bottomSheetContainer}>
          <TextArea setText={setKeyNoteInputText} />
          <Button
            disabled={!keyNoteInputText.length}
            children={'작성 완료하기'}
            onPress={handlePressCompleteButton}
          />
        </View>
      }
      height={160}
    />
  );
}

const keyNoteStyles = StyleSheet.create({
  bottomSheetContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
});

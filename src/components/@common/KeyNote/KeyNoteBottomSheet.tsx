import {Dispatch, SetStateAction, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import BottomSheet from 'components/@common/BottomSheet';
import TextArea from 'components/@common/TextArea';
import Button from 'components/@common/Buttons/Button';

/**
 * @param isBottomSheetOpen bottomSheet의 open 여부
 * @param setIsBottomSheetOpen bottomSheet의 open 여부를 변경하는 함수
 * @param keyNoteInputText keyNote input에 들어갈 텍스트
 * @param setKeyNoteText keyNote 컴포넌트에 들어갈 텍스트를 변경하는 함수
 * @param setKeyNoteInputText keyNote input에 들어갈 텍스트를 변경하는 함수
 */
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
  useEffect(() => {
    setKeyNoteInputText('');
  }, [isBottomSheetOpen, setKeyNoteInputText]);

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
    padding: 15,
  },
});

import {Dispatch, SetStateAction, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import BottomSheet from 'components/@common/BottomSheet';
import TextArea from 'components/@common/TextArea';
import Button from 'components/@common/Buttons/Button';

/**
 * @param isBottomSheetOpen bottomSheet의 open 여부
 * @param setIsBottomSheetOpen bottomSheet의 open 여부를 변경하는 함수
 * @param placeholder input의 placeholder
 * @param inputText input에 들어갈 텍스트
 * @param setText 컴포넌트에 들어갈 텍스트를 변경하는 함수
 * @param setInputText input에 들어갈 텍스트를 변경하는 함수
 */
type InputBottomSheetProps = {
  isBottomSheetOpen: boolean;
  setIsBottomSheetOpen: Dispatch<SetStateAction<boolean>>;
  placeholder?: string;
  inputText: string;
  setText: Dispatch<SetStateAction<string>>;
  setInputText: Dispatch<SetStateAction<string>>;
};

export default function InputBottomSheet({
  isBottomSheetOpen,
  setIsBottomSheetOpen,
  placeholder,
  inputText,
  setText,
  setInputText,
}: InputBottomSheetProps) {
  useEffect(() => {
    setInputText('');
  }, [isBottomSheetOpen, setInputText]);

  const handlePressCompleteButton = () => {
    inputText.length && setText(inputText);
    setIsBottomSheetOpen(false);
  };

  return (
    <BottomSheet
      isBottomSheetOpen={isBottomSheetOpen}
      setIsBottomSheetOpen={setIsBottomSheetOpen}
      children={
        <View style={keyNoteStyles.bottomSheetContainer}>
          <TextArea setText={setInputText} placeholder={placeholder} />
          <Button
            disabled={!inputText.length}
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

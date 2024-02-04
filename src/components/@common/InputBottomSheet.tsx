import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from 'components/@common/Buttons/Button';
import BottomSheet from 'components/@common/BottomSheet/BottomSheet';
import InputArea from 'components/@common/InputArea';

/**
 * @param isBottomSheetOpen bottomSheet의 open 여부
 * @param setIsBottomSheetOpen bottomSheet의 open 여부를 변경하는 함수
 * @param placeholder input의 placeholder
 * @param text input에 들어갈 텍스트
 * @param setText 컴포넌트에 들어갈 텍스트를 변경하는 함수
 */
type InputBottomSheetProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  placeholder?: string;
  setText: (text: string) => void;
  text: string;
};

export default function InputBottomSheet({
  isOpen,
  onOpen,
  onClose,
  placeholder,
  text,
  setText,
}: InputBottomSheetProps) {
  const [input, setInput] = useState<string>(text);

  const handlePressCompleteButton = () => {
    input.length && setText(input);
    onClose();
  };

  return (
    <BottomSheet
      isBottomSheetOpen={isOpen}
      onClose={onClose}
      onOpen={onOpen}
      children={
        <View style={keyNoteStyles.bottomSheetContainer}>
          <InputArea setText={setInput} placeholder={placeholder} />
          <Button
            disabled={!input.length}
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

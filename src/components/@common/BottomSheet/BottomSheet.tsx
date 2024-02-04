import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useRef,
} from 'react';
import {StyleSheet} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {theme} from 'styles';

/**
 * @param isBottomSheetOpen bottomSheet의 open 여부
 * @param setInputState input 상태를 변경하는 함수
 * @param height bottomSheet의 높이
 * @param children bottomSheet 내부에 들어갈 content
 */
type BottomSheetProps = {
  isBottomSheetOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  setInputState?: Dispatch<SetStateAction<boolean>>;
  height?: number;
};

export default function BottomSheet({
  isBottomSheetOpen,
  onOpen,
  onClose,
  setInputState,
  height,
  children,
}: PropsWithChildren<BottomSheetProps>) {
  const bottomSheetRef = useRef<RBSheet>(null);

  useEffect(() => {
    if (bottomSheetRef.current) {
      isBottomSheetOpen
        ? bottomSheetRef.current.open()
        : bottomSheetRef.current.close();
    }
  }, [isBottomSheetOpen]);

  const handleOpenBottomSheet = () => {
    onOpen();
  };

  const handleCloseBottomSheet = () => {
    onClose();
    setInputState?.(false);
  };

  return (
    <RBSheet
      // known issue
      ref={bottomSheetRef}
      onOpen={handleOpenBottomSheet}
      onClose={handleCloseBottomSheet}
      keyboardAvoidingViewEnabled={true}
      height={height ?? 200}
      customStyles={bottomSheetStyles}>
      {children}
    </RBSheet>
  );
}

const bottomSheetStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: theme.palette.gray2,
  },
});

import {Dispatch, ReactNode, SetStateAction, useEffect, useRef} from 'react';
import {StyleSheet} from 'react-native';
import {SetterOrUpdater} from 'recoil';
import RBSheet from 'react-native-raw-bottom-sheet';
import {theme} from 'styles';

type BottomSheetProps = {
  isBottomSheetOpen: boolean;
  setIsBottomSheetOpen:
    | Dispatch<SetStateAction<boolean>>
    | SetterOrUpdater<unknown>;
  setInputState?: Dispatch<SetStateAction<boolean>>;
  height?: number;
  children: ReactNode;
};

export default function BottomSheet({
  isBottomSheetOpen,
  setIsBottomSheetOpen,
  setInputState,
  height,
  children,
}: BottomSheetProps) {
  const bottomSheetRef = useRef<RBSheet>(null);

  useEffect(() => {
    isBottomSheetOpen
      ? bottomSheetRef.current!.open()
      : bottomSheetRef.current!.close();
  }, [isBottomSheetOpen]);

  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
    setInputState?.(false);
  };

  return (
    <RBSheet
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

import {ReactNode, forwardRef} from 'react';
import GorhomBottomSheet, {BottomSheetProps} from '@gorhom/bottom-sheet';
import {StyleSheet} from 'react-native';

type CommonBottomSheetProps = {
  children: ReactNode;
} & BottomSheetProps;

const CommonBottomSheet = forwardRef<GorhomBottomSheet, CommonBottomSheetProps>(
  ({snapPoints = ['50%'], children}, ref) => {
    return (
      <GorhomBottomSheet
        ref={ref}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        style={styles.bottomSheetContainer}>
        {children}
      </GorhomBottomSheet>
    );
  },
);

export default CommonBottomSheet;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 10,
  },
});

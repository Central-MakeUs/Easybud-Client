import {ReactNode, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from 'styles';
import Icon from 'components/@common/Icon';
import Typography from 'components/@common/Typography';
import BottomSheet from 'components/@common/BottomSheet/BottomSheet';

/**
 * @param buttonText 버튼 텍스트
 * @param bottomSheetContent bottomSheet에 들어갈 요소
 * @param onPress 버튼을 눌렀을 때 동작하는 함수
 */
type ActionButtonWithBottomSheetProps = {
  buttonText: string;
  bottomSheetContent?: ReactNode;
  onPress?: () => void;
};

export default function ActionButtonWithBottomSheet({
  buttonText,
  bottomSheetContent,
  onPress,
}: ActionButtonWithBottomSheetProps) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handlePressActionButton = () => setIsBottomSheetOpen(true);
  const handleOpenBottomSheet = () => setIsBottomSheetOpen(true);
  const handleCloseBottomSheet = () => setIsBottomSheetOpen(false);

  return (
    <>
      <TouchableOpacity
        style={actionButtonWithBottomSheetStyles.button}
        onPress={onPress || handlePressActionButton}>
        <Typography type={'Body1Semibold'} color={'gray4'}>
          {buttonText}
        </Typography>
        <Icon name={'ArrowRightSmall'} />
      </TouchableOpacity>
      {bottomSheetContent && (
        <BottomSheet
          isBottomSheetOpen={isBottomSheetOpen}
          onOpen={handleOpenBottomSheet}
          onClose={handleCloseBottomSheet}
          height={140}
          children={bottomSheetContent}
        />
      )}
    </>
  );
}

const actionButtonWithBottomSheetStyles = StyleSheet.create({
  button: {
    width: '100%',
    height: 68,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderColor: theme.palette.gray3,
    borderBottomWidth: 1,
  },
});

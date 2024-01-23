import {ReactNode, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from 'styles';
import BottomSheet from 'components/@common/BottomSheet';
import Icon from 'components/@common/Icon';
import Typography from 'components/@common/Typography';

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
          setIsBottomSheetOpen={setIsBottomSheetOpen}
          children={bottomSheetContent}
        />
      )}
    </>
  );
}

const actionButtonWithBottomSheetStyles = StyleSheet.create({
  button: {
    height: 68,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderColor: theme.palette.gray3,
    borderBottomWidth: 1,
  },
});

import {StyleSheet, View} from 'react-native';
import Typography from 'components/@common/Typography';
import Button from 'components/@common/Buttons/Button';

type MemberManagementBottomSheetContentProps = {
  variant: 'leave' | 'logout';
};

export default function MemberManagementBottomSheetContent({
  variant,
}: MemberManagementBottomSheetContentProps) {
  const buttonText = variant === 'leave' ? '탈퇴하기' : '로그아웃하기';
  const warningText =
    variant === 'leave'
      ? '정말 탈퇴하시겠습니까?'
      : '정말 로그아웃하시겠습니까?';

  return (
    <View style={settingScreenStyles.bottomSheetContainer}>
      <Typography type={'Body1Semibold'} color={'gray5'}>
        {warningText}
      </Typography>
      <Button>{buttonText}</Button>
    </View>
  );
}

const settingScreenStyles = StyleSheet.create({
  bottomSheetContainer: {
    height: '100%',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

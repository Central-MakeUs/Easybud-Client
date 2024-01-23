import {View, StyleSheet} from 'react-native';
import {theme} from 'styles';
import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import ActionButtonWithBottomSheet from 'components/screens/SettingScreen/ActionButtonWithBottomSheet';

export default function SettingScreen() {
  return (
    <ScreenContainer contentContainerStyle={{paddingHorizontal: 0}}>
      <ActionButtonWithBottomSheet buttonText={'카드 설정'} />
      <View style={settingScreenStyles.divider} />
      <ActionButtonWithBottomSheet
        buttonText={'로그아웃'}
        bottomSheetContent={
          <>
            <Typography>로그아웃</Typography>
          </>
        }
      />
      <ActionButtonWithBottomSheet
        buttonText={'회원 탈퇴'}
        bottomSheetContent={
          <>
            <Typography>회원 탈퇴</Typography>
          </>
        }
      />
    </ScreenContainer>
  );
}

const settingScreenStyles = StyleSheet.create({
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
  divider: {
    width: '100%',
    height: 7,
    backgroundColor: theme.palette.gray3,
  },
});

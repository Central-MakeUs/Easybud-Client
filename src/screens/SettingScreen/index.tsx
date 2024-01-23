import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {theme} from 'styles';
import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import ActionButtonWithBottomSheet from 'components/screens/SettingScreen/ActionButtonWithBottomSheet';
import Button from 'components/@common/Buttons/Button';

export default function SettingScreen() {
  const navigation = useNavigation();

  const handlePressCardSettingButton = () => navigation.navigate('CardSetting');

  return (
    <ScreenContainer contentContainerStyle={{paddingHorizontal: 0}}>
      <ActionButtonWithBottomSheet
        buttonText={'카드 설정'}
        onPress={handlePressCardSettingButton}
      />
      <View style={settingScreenStyles.divider} />
      <ActionButtonWithBottomSheet
        buttonText={'로그아웃'}
        bottomSheetContent={
          <View style={settingScreenStyles.bottomSheetContainer}>
            <Typography type={'Body1Semibold'} color={'gray5'}>
              정말 로그아웃하시겠습니까?
            </Typography>
            <Button>로그아웃하기</Button>
          </View>
        }
      />
      <ActionButtonWithBottomSheet
        buttonText={'회원 탈퇴'}
        bottomSheetContent={
          <View style={settingScreenStyles.bottomSheetContainer}>
            <Typography type={'Body1Semibold'} color={'gray5'}>
              정말 탈퇴하시겠습니까?
            </Typography>
            <Button>탈퇴하기</Button>
          </View>
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
  bottomSheetContainer: {
    height: '100%',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

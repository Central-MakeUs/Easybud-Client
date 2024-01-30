import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {theme} from 'styles';
import ScreenContainer from 'components/@common/ScreenContainer';
import ActionButtonWithBottomSheet from 'components/screens/SettingScreen/ActionButtonWithBottomSheet';
import MemberManagementBottomSheetContent from 'components/screens/SettingScreen/MemberManagementBottomSheetContent';

export default function SettingScreen() {
  const navigation = useNavigation();

  const handlePressCardSettingButton = () => navigation.navigate('CardList');

  return (
    <ScreenContainer
      contentContainerStyle={settingScreenStyles.contentContainer}>
      <ActionButtonWithBottomSheet
        buttonText={'카드 설정'}
        onPress={handlePressCardSettingButton}
      />
      <View style={settingScreenStyles.divider} />
      <ActionButtonWithBottomSheet
        buttonText={'로그아웃'}
        bottomSheetContent={
          <MemberManagementBottomSheetContent variant="logout" />
        }
      />
      <ActionButtonWithBottomSheet
        buttonText={'회원 탈퇴'}
        bottomSheetContent={
          <MemberManagementBottomSheetContent variant="leave" />
        }
      />
    </ScreenContainer>
  );
}

const settingScreenStyles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 0,
  },
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

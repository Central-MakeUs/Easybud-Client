import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ActionButtonWithBottomSheet from 'components/screens/SettingScreen/ActionButtonWithBottomSheet';
import MemberManagementBottomSheetContent from 'components/screens/SettingScreen/MemberManagementBottomSheetContent';
import Divider from 'components/@common/Divider';
import ScreenContainer from 'components/@common/ScreenContainer';

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
      <Divider />
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
    gap: 0,
  },
});

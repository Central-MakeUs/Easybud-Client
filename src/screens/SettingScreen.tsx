import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'components/@common/Icon';
import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import {theme} from 'styles';
import {useState} from 'react';
import BottomSheet from 'components/@common/BottomSheet';

export default function SettingScreen() {
  const [isLogoutBottomSheetOpen, setIsLogoutBottomSheetOpen] = useState(false);
  const [isLeaveBottomSheetOpen, setIsLeaveBottomSheetOpen] = useState(false);

  return (
    <ScreenContainer contentContainerStyle={{paddingHorizontal: 0}}>
      <TouchableOpacity style={settingScreenStyles.button}>
        <Typography type={'Body1Semibold'} color={'gray4'}>
          카드 설정
        </Typography>
        <Icon name={'ArrowRightSmall'} />
      </TouchableOpacity>
      <View style={settingScreenStyles.divider} />
      <TouchableOpacity
        style={settingScreenStyles.button}
        onPress={() => setIsLogoutBottomSheetOpen(true)}>
        <Typography type={'Body1Semibold'} color={'gray4'}>
          로그아웃
        </Typography>
        <Icon name={'ArrowRightSmall'} />
      </TouchableOpacity>
      <BottomSheet
        isBottomSheetOpen={isLogoutBottomSheetOpen}
        setIsBottomSheetOpen={setIsLogoutBottomSheetOpen}
        children={
          <>
            <Typography>로그아웃</Typography>
          </>
        }
      />
      <TouchableOpacity
        style={settingScreenStyles.button}
        onPress={() => setIsLeaveBottomSheetOpen(true)}>
        <Typography type={'Body1Semibold'} color={'gray4'}>
          회원 탈퇴
        </Typography>
        <Icon name={'ArrowRightSmall'} />
      </TouchableOpacity>
      <BottomSheet
        isBottomSheetOpen={isLeaveBottomSheetOpen}
        setIsBottomSheetOpen={setIsLeaveBottomSheetOpen}
        children={
          <>
            <Typography>회원탈퇴</Typography>
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

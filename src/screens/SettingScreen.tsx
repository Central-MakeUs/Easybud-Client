import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'components/@common/Icon';
import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import {theme} from 'styles';

export default function SettingScreen() {
  return (
    <ScreenContainer contentContainerStyle={{paddingHorizontal: 0}}>
      <TouchableOpacity style={settingScreenStyles.button}>
        <Typography type={'Body1Semibold'} color={'gray4'}>
          카드 설정
        </Typography>
        <Icon name={'ArrowRightSmall'} />
      </TouchableOpacity>
      <View style={settingScreenStyles.divider} />
      <TouchableOpacity style={settingScreenStyles.button}>
        <Typography type={'Body1Semibold'} color={'gray4'}>
          로그아웃
        </Typography>
        <Icon name={'ArrowRightSmall'} />
      </TouchableOpacity>
      <TouchableOpacity style={settingScreenStyles.button}>
        <Typography type={'Body1Semibold'} color={'gray4'}>
          회원 탈퇴
        </Typography>
        <Icon name={'ArrowRightSmall'} />
      </TouchableOpacity>
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

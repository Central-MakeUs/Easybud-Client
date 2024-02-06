import {useSetRecoilState} from 'recoil';
import {Image, StyleSheet, View} from 'react-native';
import {
  getProfile,
  loginWithKakaoAccount,
} from '@react-native-seoul/kakao-login';
import {userInfoState} from 'libs/recoil/states/userInfo';
import {theme} from 'styles';
import Logo from 'assets/logos/logo-white.png';
import {SetStepActionType} from 'types/screens/FunnelScreen';
import useAuthStorage from 'hooks/useAuthStorage';
import useSocialLoginMutation from 'hooks/mutations/Auth/useSocialLoginMutation';
import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import SocialLoginButton from 'components/@common/Buttons/SocialLoginButton';

type LoginStepScreenProps = SetStepActionType;

export default function LoginStepScreen({onNext}: LoginStepScreenProps) {
  const {setAuthData} = useAuthStorage();
  const setUserInfo = useSetRecoilState(userInfoState);

  const {authMutation} = useSocialLoginMutation();

  const handlePressKakaoLoginButton = async () => {
    const kakaoResult = await loginWithKakaoAccount();
    const kakaoProfile = await getProfile();

    authMutation.mutate(
      {
        type: 'KAKAO',
        idToken: kakaoResult.idToken,
      },
      {
        onSuccess: data => {
          setAuthData({
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          });
          setUserInfo({username: kakaoProfile.nickname});

          onNext();
        },
      },
    );
  };

  return (
    <ScreenContainer style={loginStyles.container}>
      <View style={loginStyles.imageContainer}>
        <Image source={Logo} style={loginStyles.image} />
      </View>
      <View style={loginStyles.titleContainer}>
        <Typography type={'Title1Semibold1'} color={'white'}>
          가장 편한 방법으로 시작하세요
        </Typography>
      </View>
      <View style={loginStyles.bodyContainer}>
        <Typography type={'Body2Semibold'} color={'white'}>
          1분만에{' '}
        </Typography>
        <Typography type={'Body2Regular'} color={'white'}>
          빠른 회원가입
        </Typography>
      </View>
      <View style={loginStyles.buttonContainer}>
        <SocialLoginButton
          variant="kakao"
          onPress={handlePressKakaoLoginButton}
        />
        <SocialLoginButton variant="apple" onPress={onNext} />
      </View>
    </ScreenContainer>
  );
}

const loginStyles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 42,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.palette.primary,
  },
  imageContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 270,
    height: 270,
  },
  titleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  bodyContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    marginTop: 'auto',
  },
});

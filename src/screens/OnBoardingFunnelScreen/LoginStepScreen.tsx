import {Image, StyleSheet, View} from 'react-native';
import {useSetRecoilState} from 'recoil';
import {
  getProfile,
  loginWithKakaoAccount,
} from '@react-native-seoul/kakao-login';
import {userInfoState} from 'libs/recoil/states/userInfo';
import Logo from 'assets/logos/logo-white.png';
import useAuthStorage from 'hooks/useAuthStorage';
import useSocialLoginMutation from 'hooks/mutations/Auth/useSocialLoginMutation';
import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import SocialLoginButton from 'components/@common/Buttons/SocialLoginButton';
import {appleClient} from 'apis/appleClient';
import {theme} from 'styles';
import appleAuth from '@invertase/react-native-apple-authentication';

type LoginStepScreenProps = {
  onNext: (type: string) => void;
};

export default function LoginStepScreen({onNext}: LoginStepScreenProps) {
  const {setAuthData} = useAuthStorage();
  const setUserInfo = useSetRecoilState(userInfoState);

  const {authMutation} = useSocialLoginMutation();

  const handlePressKakaoLoginButton = async () => {
    const {idToken} = await loginWithKakaoAccount();
    const {nickname: username} = await getProfile();

    authMutation.mutate(
      {type: 'KAKAO', idToken},
      {
        onSuccess: ({accessToken, refreshToken, type}) => {
          setAuthData({accessToken, refreshToken});
          setUserInfo({username});
          onNext(type);
        },
      },
    );
  };
  const handlePressAppleLoginButton = async () => {
    const {
      user,
      fullName,
      identityToken: idToken,
    } = await appleClient.fetchLogin();

    const authState = await appleClient.getUserAuthState(user);

    const username = fullName
      ? fullName?.nickname
        ? fullName?.nickname
        : '회원'
      : '회원';

    if (idToken && authState === appleAuth.State.AUTHORIZED) {
      authMutation.mutate(
        {type: 'APPLE', idToken},
        {
          onError: () => {},
          onSuccess: ({accessToken, refreshToken, type}) => {
            setAuthData({accessToken, refreshToken});
            setUserInfo({username});

            onNext(type);
          },
        },
      );
    }
  };

  return (
    <ScreenContainer
      style={loginStyles.container}
      backgroundColor={theme.palette.primary}>
      <View style={{justifyContent: 'space-between', height: '100%'}}>
        <View style={loginStyles.titleContainer}>
          <Typography type={'Title1Semibold1'} color={'white'}>
            가장 편한 방법으로 시작하세요
          </Typography>
          <View style={loginStyles.bodyContainer}>
            <Typography type={'Body2Semibold'} color={'white'}>
              1분만에{' '}
            </Typography>
            <Typography type={'Body2Regular'} color={'white'}>
              빠른 회원가입
            </Typography>
          </View>
        </View>
        <View style={loginStyles.imageContainer}>
          <Image source={Logo} style={loginStyles.image} />
        </View>
        <View style={loginStyles.buttonContainer}>
          <SocialLoginButton
            variant="kakao"
            onPress={handlePressKakaoLoginButton}
          />
          <SocialLoginButton
            variant="apple"
            onPress={handlePressAppleLoginButton}
          />
        </View>
      </View>
    </ScreenContainer>
  );
}

const loginStyles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 270,
    height: 270,
  },
  titleContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    gap: 10,
  },
  bodyContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonContainer: {
    gap: 16,
  },
});

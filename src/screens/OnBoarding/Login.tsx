import SocialLoginButton from 'components/@common/Buttons/SocialLoginButton';
import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import {StyleSheet, View} from 'react-native';

export default function Login() {
  return (
    <ScreenContainer style={loginStyles.container}>
      <View style={loginStyles.titleContainer}>
        <Typography type={'Title1Semibold1'}>
          가장 편한 방법으로 시작하세요
        </Typography>
      </View>
      <View style={loginStyles.bodyContainer}>
        <Typography type={'Body2Semibold'} color={'gray4'}>
          1분만에
        </Typography>
        <Typography type={'Body2Regular'} color={'gray4'}>
          빠른 회원가입
        </Typography>
      </View>
      <View style={loginStyles.buttonContainer}>
        <SocialLoginButton variant="kakao" />
        <SocialLoginButton variant="apple" />
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
  },
  titleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
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

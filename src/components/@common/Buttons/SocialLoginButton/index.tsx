import Icon from 'components/@common/Icon';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
} from 'react-native';
import kakaoLogo from 'assets/images/kakao.png';
import {
  SocialLoginButtonBackgroundColor,
  SocialLoginButtonText,
  SocialLoginButtonTextColor,
} from 'constants/Button';
import Typography from 'components/@common/Typography';

/**
 * @param variant 버튼 종류: 'kakao' | 'apple'
 */
type SocialLoginButtonProps = {
  variant: 'kakao' | 'apple';
} & TouchableOpacityProps;

export default function SocialLoginButton({
  variant,
  ...props
}: SocialLoginButtonProps) {
  const {backgroundColor, textColor, borderColor, borderWidth} = {
    backgroundColor: SocialLoginButtonBackgroundColor[variant],
    textColor: SocialLoginButtonTextColor[variant],
    borderColor: variant === 'apple' ? '#000000' : 'transparent',
    borderWidth: variant === 'apple' ? 1 : 0,
  };

  return (
    <TouchableOpacity
      {...props}
      style={[
        socialLoginButtonStyles.button,
        {
          backgroundColor,
          borderColor,
          borderWidth,
        },
      ]}>
      {variant === 'apple' ? (
        <Icon
          name={'AppleLogo'}
          width={56}
          height={56}
          style={socialLoginButtonStyles.appleImage}
        />
      ) : (
        <Image source={kakaoLogo} style={socialLoginButtonStyles.kakaoImage} />
      )}
      <Typography style={[{color: textColor}, socialLoginButtonStyles.text]}>
        {SocialLoginButtonText[variant]}
      </Typography>
    </TouchableOpacity>
  );
}

const socialLoginButtonStyles = StyleSheet.create({
  button: {
    width: '100%',
    height: 56,
    borderRadius: 12,
    paddingRight: 14,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  kakaoImage: {
    width: 30,
    height: 30,
    marginRight: 58,
    marginLeft: 14,
  },
  appleImage: {
    marginRight: 40,
  },
  text: {
    textAlign: 'center',
  },
});

import Icon from 'components/@common/Icon';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
} from 'react-native';
import kakaoLogo from 'assets/images/kakao.png';
import Typography from 'components/@common/Typography';

const BUTTON_TEXT = {
  kakao: '카카오 로그인',
  apple: 'Apple로 로그인',
};

const TEXT_COLOR = {
  kakao: 'rgba(0, 0, 0, 0.85)',
  apple: '#000000',
};

const BACKGROUND_COLOR = {
  kakao: '#FEE500',
  apple: '#FFFFFF',
};

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
    backgroundColor: BACKGROUND_COLOR[variant],
    textColor: TEXT_COLOR[variant],
    borderColor: variant === 'apple' ? '#000000' : 'transparent',
    borderWidth: variant === 'apple' ? 1 : 0,
  };

  return (
    <>
      <TouchableOpacity
        {...props}
        style={{
          ...socialLoginButtonStyles.button,
          backgroundColor,
          borderColor,
          borderWidth,
        }}>
        {variant === 'apple' ? (
          <Icon name={'AppleLogo'} width={56} height={56} />
        ) : (
          <Image
            source={kakaoLogo}
            style={{width: 30, height: 30, marginRight: 14, marginLeft: 14}}
          />
        )}
        <Typography style={{color: textColor, textAlign: 'center', flex: 1}}>
          {BUTTON_TEXT[variant]}
        </Typography>
      </TouchableOpacity>
    </>
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
});

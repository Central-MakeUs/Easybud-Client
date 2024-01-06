import Icon from 'components/@common/Icon';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import kakaoLogo from 'assets/images/kakao.png';

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
  const {backgroundColor, textColor, borderColor, borderWidth, paddingLeft} = {
    backgroundColor: BACKGROUND_COLOR[variant],
    textColor: TEXT_COLOR[variant],
    borderColor: variant === 'apple' ? '#000000' : 'transparent',
    borderWidth: variant === 'apple' ? 1 : 0,
    paddingLeft: variant === 'apple' ? 2 : 15,
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
          paddingLeft,
        }}>
        {variant === 'apple' ? (
          <Icon name={'AppleLogo'} width={56} height={56} />
        ) : (
          <img src={kakaoLogo} width={30} height={30} />
        )}
        <Text style={{color: textColor, marginHorizontal: 'auto'}}>
          {BUTTON_TEXT[variant]}
        </Text>
      </TouchableOpacity>
    </>
  );
}

const socialLoginButtonStyles = StyleSheet.create({
  button: {
    width: '100%',
    height: 56,
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import Icon from 'components/@common/Icon';
import Typography from 'components/@common/Typography';
import {LogoIcons} from 'types/icon';

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
  const {logo, text, size}: {logo: LogoIcons; text: string; size: number} =
    (() => {
      switch (variant) {
        case 'kakao':
          return {
            logo: 'KakaoLogo',
            text: '카카오 로그인',
            size: 32,
          };
        case 'apple':
          return {
            logo: 'AppleLogo',
            text: 'Apple로 로그인',
            size: 56,
          };
      }
    })();

  return (
    <TouchableOpacity
      {...props}
      style={[
        socialLoginButtonStyles.button,
        socialLoginButtonStyles[variant],
      ]}>
      <Icon
        name={logo}
        size={size}
        style={[
          socialLoginButtonStyles.logo,
          socialLoginButtonStyles[`${variant}Icon`],
        ]}
      />
      <Typography
        style={[
          {color: socialLoginButtonStyles[variant].color},
          socialLoginButtonStyles.text,
        ]}>
        {text}
      </Typography>
      <View style={{width: 56}} />
    </TouchableOpacity>
  );
}

const socialLoginButtonStyles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    height: 56,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  apple: {
    borderWidth: 1,
    borderColor: '#000000',
    color: '#000000',
    backgroundColor: '#FFFFFF',
  },
  kakao: {
    backgroundColor: '#FEE500',
    color: 'rgba(0, 0, 0, 0.85)',
  },
  logo: {},
  appleIcon: {},
  kakaoIcon: {margin: 12}, // 28-16
  text: {textAlign: 'center'},
});

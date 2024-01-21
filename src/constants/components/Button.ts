import {StyleSheet} from 'react-native';
import {theme} from 'styles';
import {LogoIcons} from 'types/components/Icon';

/** button */

export const ButtonTextColor = {
  normal: {
    primary: 'white',
    secondary: 'gray5',
  },
  disabled: {
    primary: 'white',
    secondary: 'gray5',
  },
} as const;

export const ButtonBackgroundColor = {
  normal: {
    primary: theme.palette.primary,
    secondary: theme.palette.gray2,
  },
  disabled: {
    primary: theme.palette.gray3,
    secondary: theme.palette.gray2,
  },
} as const;

/** social login button */

export const SocialLoginButtonStyles = StyleSheet.create({
  apple: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    borderWidth: 1,
    borderColor: '#000000',
  },
  kakao: {
    backgroundColor: '#FEE500',
    color: 'rgba(0, 0, 0, 0.85)',
  },
  appleIcon: {width: 56},
  kakaoIcon: {margin: 14, width: 28},
});

export const SocialLoginButtonLabel: {
  [key in 'kakao' | 'apple']: {logo: LogoIcons; text: string};
} = {
  kakao: {
    logo: 'KakaoLogo',
    text: '카카오 로그인',
  },
  apple: {
    logo: 'AppleLogo',
    text: 'Apple로 로그인',
  },
} as const;

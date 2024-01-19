import {theme} from 'styles';
import {LogoIcons} from 'types/icon';

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

export const SocialLoginButtonStyles = {
  apple: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    borderWidth: 1,
    borderColor: '#000000',
  },
  kakao: {
    backgroundColor: '#FEE500',
    color: 'rgba(0, 0, 0, 0.85)',
    margin: 12, // 28-16
  },
} as const;

export const SocialLoginButtonLabel: {
  [key in 'kakao' | 'apple']: {logo: LogoIcons; text: string; size: number};
} = {
  kakao: {
    logo: 'KakaoLogo',
    text: '카카오 로그인',
    size: 32,
  },
  apple: {
    logo: 'AppleLogo',
    text: 'Apple로 로그인',
    size: 56,
  },
} as const;

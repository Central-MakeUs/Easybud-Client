import {theme} from 'styles';

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

export const SocialLoginButtonText = {
  kakao: '카카오 로그인',
  apple: 'Apple로 로그인',
} as const;

export const SocialLoginButtonTextColor = {
  kakao: 'rgba(0, 0, 0, 0.85)',
  apple: '#000000',
} as const;

export const SocialLoginButtonBackgroundColor = {
  kakao: '#FEE500',
  apple: '#FFFFFF',
} as const;

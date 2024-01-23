import {VariantType} from 'types/screens/SettingScreen';

export const TextVariant: Record<
  'buttonText' | 'warningText',
  Record<VariantType, string>
> = {
  buttonText: {
    leave: '탈퇴하기',
    logout: '로그아웃하기',
  },
  warningText: {
    leave: '정말 탈퇴하시겠습니까?',
    logout: '정말 로그아웃하시겠습니까?',
  },
};

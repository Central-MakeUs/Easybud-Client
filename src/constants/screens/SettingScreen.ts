import {VariantType} from 'types/screens/SettingScreen';

export const TextVariant: Record<
  'buttonText' | 'warningText',
  Record<VariantType, string>
> = {
  buttonText: {
    leave: '회원 탈퇴',
    logout: '로그아웃',
  },
  warningText: {
    leave: '정말 탈퇴하시겠습니까?',
    logout: '정말 로그아웃하시겠습니까?',
  },
};

export const cardUsagePeriodOptions = [
  '1일 ~ 말일',
  '2일 ~ 1일',
  '3일 ~ 2일',
  '4일 ~ 3일',
  '5일 ~ 4일',
  '6일 ~ 5일',
  '7일 ~ 6일',
  '8일 ~ 7일',
  '9일 ~ 8일',
  '10일 ~ 9일',
  '11일 ~ 10일',
  '12일 ~ 11일',
  '13일 ~ 12일',
  '14일 ~ 13일',
  '15일 ~ 14일',
  '16일 ~ 15일',
  '17일 ~ 16일',
  '18일 ~ 17일',
  '19일 ~ 18일',
  '20일 ~ 19일',
  '21일 ~ 20일',
  '22일 ~ 21일',
  '23일 ~ 22일',
  '24일 ~ 23일',
  '25일 ~ 24일',
  '26일 ~ 25일',
  '27일 ~ 26일',
  '28일 ~ 27일',
];

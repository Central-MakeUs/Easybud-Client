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

export const startDateListData = [
  '1일',
  '2일',
  '3일',
  '4일',
  '5일',
  '6일',
  '7일',
  '8일',
  '9일',
  '10일',
  '11일',
  '12일',
  '13일',
  '14일',
  '15일',
  '16일',
  '17일',
  '18일',
  '19일',
  '20일',
  '21일',
  '22일',
  '23일',
  '24일',
  '25일',
  '26일',
  '27일',
  '28일',
];

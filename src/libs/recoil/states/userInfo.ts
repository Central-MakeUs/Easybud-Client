import {atom} from 'recoil';
import {RecoilStateKeys} from 'libs/recoil/constants/keys';
import {UserInfoType} from 'libs/recoil/types/userInfo';

export const userInfoState = atom<UserInfoType>({
  key: RecoilStateKeys.UserInfo,
  default: {username: ''},
});

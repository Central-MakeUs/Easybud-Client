import {atom} from 'recoil';
import {AuthStateType} from 'libs/recoil/types/auth';
import {RecoilStateKeys} from 'libs/recoil/constants/keys';

export const authState = atom<AuthStateType>({
  key: RecoilStateKeys.Auth,
  default: {isAuthenticated: false},
});

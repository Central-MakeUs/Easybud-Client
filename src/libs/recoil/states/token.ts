import {atom} from 'recoil';
import {RecoilStateKeys} from 'libs/recoil/constants/keys';
import {TokenType} from 'types/token';
import {authLocalStorageEffect} from 'libs/recoil/authUtils';

export const tokenState = atom<TokenType>({
  key: RecoilStateKeys.Token,
  default: {accessToken: null, refreshToken: null},
  effects: [
    authLocalStorageEffect(
      RecoilStateKeys.AccessToken,
      RecoilStateKeys.RefreshToken,
    ),
  ],
});

import {atom} from 'recoil';
import {RecoilStateKeys} from 'libs/recoil/constants/keys';
import {localStorageEffect} from 'libs/recoil/utils';
import {TokenType} from 'types/token';

export const tokenState = atom<TokenType>({
  key: RecoilStateKeys.Token,
  default: null,
  effects: [localStorageEffect(RecoilStateKeys.Token)],
});

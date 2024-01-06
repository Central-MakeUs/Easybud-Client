import {atom} from 'recoil';
import {RecoilStateKeys} from 'libs/recoil/keys';
import {localStorageEffect} from 'libs/recoil/utils';
import {TokenType} from 'libs/recoil/types';

export const tokenState = atom<TokenType>({
  key: RecoilStateKeys.Token,
  default: null,
  effects: [localStorageEffect(RecoilStateKeys.Token)],
});

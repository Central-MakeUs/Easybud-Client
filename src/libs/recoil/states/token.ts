import {atom} from 'recoil';
import {RecoilStateKeys} from 'libs/recoil/keys';

// Todo: save with async storage
export const tokenState = atom<string | null>({
  key: RecoilStateKeys.Token,
  default: null,
});

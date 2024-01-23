import {RecoilStateKeys} from 'libs/recoil/constants/keys';
import {atom} from 'recoil';

const initialState: string = '';

export const categoryState = atom<string>({
  key: RecoilStateKeys.Category,
  default: initialState,
});

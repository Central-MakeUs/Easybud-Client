import {RecoilStateKeys} from 'libs/recoil/constants/keys';
import {CategoryType} from 'libs/recoil/types/category';
import {atom} from 'recoil';

const initialState: CategoryType = {name: '', value: ''};

export const categoryState = atom<CategoryType>({
  key: RecoilStateKeys.Category,
  default: initialState,
});

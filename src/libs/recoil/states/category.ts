import {atom} from 'recoil';
import {RecoilStateKeys} from 'libs/recoil/constants/keys';
import {CategoryStateType} from 'libs/recoil/types/category';

const initialState = {
  usagePeriodDate: '',
  paymentDate: '',
};

export const categoryState = atom<CategoryStateType>({
  key: RecoilStateKeys.Category,
  default: initialState,
});

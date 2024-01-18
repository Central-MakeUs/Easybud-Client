import {atom} from 'recoil';
import {RecoilStateKeys} from 'libs/recoil/constants/keys';
import {selectFormStateType} from 'libs/recoil/types/selectForm';

const initialState: selectFormStateType = false;

export const selectFormBottomSheetState = atom<selectFormStateType>({
  key: RecoilStateKeys.SelectFormBottomSheet,
  default: initialState,
});

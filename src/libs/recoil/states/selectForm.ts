import {atom} from 'recoil';
import {RecoilStateKeys} from 'libs/recoil/constants/keys';
import {
  selectFormBottomSheetStateType,
  selectFormInputStateType,
} from 'libs/recoil/types/selectForm';

const selectFormBottomSheetInitialState: selectFormBottomSheetStateType = false;

export const selectFormBottomSheetState = atom<selectFormBottomSheetStateType>({
  key: RecoilStateKeys.SelectFormBottomSheet,
  default: selectFormBottomSheetInitialState,
});

const selectFormInputInitialState: selectFormInputStateType = false;

export const selectFormInputState = atom<selectFormInputStateType>({
  key: RecoilStateKeys.SelectFormInput,
  default: selectFormInputInitialState,
});

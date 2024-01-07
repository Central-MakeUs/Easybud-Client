import {atom} from 'recoil';
import {RecoilStateKeys} from 'libs/recoil/constants/keys';
import {StepsType} from 'libs/recoil/types';

const initialState: StepsType = {
  currentStep: 'Step2',
};

export const funnelStepsState = atom<StepsType>({
  key: RecoilStateKeys.FunnelStep,
  default: initialState,
});

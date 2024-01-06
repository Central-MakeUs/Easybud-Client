import {atom} from 'recoil';
import {Steps} from 'navigators/constants/steps';
import {RecoilStateKeys} from 'libs/recoil/keys';

type StepsType = {
  currentStep: keyof typeof Steps;
};

const initialState: StepsType = {
  currentStep: 'Step1',
};

export const funnelStepsState = atom<StepsType>({
  key: RecoilStateKeys.FunnelStep,
  default: initialState,
});

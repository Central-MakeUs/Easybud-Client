import {atom} from 'recoil';
import {Steps} from 'navigators/constants/step';

type StepsType = {
  currentStep: keyof typeof Steps;
};

const initialState: StepsType = {
  currentStep: 'Step1',
};

export const stepsState = atom<StepsType>({
  key: 'steps',
  default: initialState,
});

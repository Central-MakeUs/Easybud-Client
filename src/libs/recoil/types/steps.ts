import {Steps} from 'navigators/constants/steps';

export type StepsType = {
  currentStep: keyof typeof Steps;
};

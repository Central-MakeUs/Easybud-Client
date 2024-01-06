import {Steps} from 'navigators/constants/steps';

export type TokenType = string | null;

export type StepsType = {
  currentStep: keyof typeof Steps;
};

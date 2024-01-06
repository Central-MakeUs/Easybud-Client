import {Steps} from 'navigators/constants/steps';

export type StepInfo = {
  name: Steps[number];
  component: React.ReactElement;
};

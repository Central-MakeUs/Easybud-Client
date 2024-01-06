import {StepInfo} from 'navigators/types/steps';
import {NonEmptyArray} from 'types/funnel';
import Description from 'screens/OnBoarding/Description';
import Login from 'screens/OnBoarding/Login';
import UserInfo from 'screens/OnBoarding/UserInfo';

export const steps: NonEmptyArray<string> = ['Step1', 'Step2', 'Step3'];

export const enum Steps {
  Step1 = 'Step1',
  Step2 = 'Step2',
  Step3 = 'Step3',
}

export const stepInfoList: StepInfo[] = [
  {name: Steps.Step1, component: <Description />},
  {name: Steps.Step2, component: <Login />},
  {name: Steps.Step3, component: <UserInfo />},
];

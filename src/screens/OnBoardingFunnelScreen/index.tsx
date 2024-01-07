import React, {useState} from 'react';
import {NonEmptyArray, OnBoardingStep, StepInfo} from 'types/funnel';
import DescriptionStepScreen from 'screens/OnBoardingFunnelScreen/DescriptionStepScreen';
import LoginStepScreen from 'screens/OnBoardingFunnelScreen/LoginStepScreen';
import UserInfoStepScreen from 'screens/OnBoardingFunnelScreen/UserInfoStepScreen';
import Funnel from 'components/@common/Funnel/Funnel';
import Step from 'components/@common/Funnel/Step';

const steps: NonEmptyArray<OnBoardingStep> = ['Step1', 'Step2', 'Step3'];

const stepInfoList: StepInfo<'Step'>[] = [
  {name: 'Step1', component: <DescriptionStepScreen />},
  {name: 'Step2', component: <LoginStepScreen />},
  {name: 'Step3', component: <UserInfoStepScreen />},
];

export default function OnBoardingFunnelScreen() {
  const [currentStep] = useState<OnBoardingStep>('Step1');

  return (
    <Funnel steps={steps} step={currentStep}>
      {stepInfoList.map(({name, component}) => (
        <Step key={name} name={name}>
          {component}
        </Step>
      ))}
    </Funnel>
  );
}

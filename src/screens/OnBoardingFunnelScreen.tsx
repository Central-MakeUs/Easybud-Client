import Funnel from 'components/@common/Funnel/Funnel';
import Step from 'components/@common/Funnel/Step';
import React, {useState} from 'react';
import DescriptionFunnelStep from 'components/onboarding/steps/DescriptionFunnelStep';
import LoginFunnelStep from 'components/onboarding/steps/LoginFunnelStep';
import UserInfoFunnelStep from 'components/onboarding/steps/UserInfoFunnelStep';
import {NonEmptyArray, OnBoardingStep, StepInfo} from 'types/funnel';

const steps: NonEmptyArray<OnBoardingStep> = ['Step1', 'Step2', 'Step3'];

const stepInfoList: StepInfo<'Step'>[] = [
  {name: 'Step1', component: <DescriptionFunnelStep />},
  {name: 'Step2', component: <LoginFunnelStep />},
  {name: 'Step3', component: <UserInfoFunnelStep />},
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

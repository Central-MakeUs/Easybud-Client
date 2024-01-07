import Funnel from 'components/@common/Funnel/Funnel';
import StepContainer from 'components/@common/Funnel/StepContainer';
import {onboardingFunnelStepsState} from 'libs/recoil/states/steps';
import React from 'react';
import {useRecoilValue} from 'recoil';
import DescriptionFunnelStep from 'components/onboarding/steps/DescriptionFunnelStep';
import LoginFunnelStep from 'components/onboarding/steps/LoginFunnelStep';
import UserInfoFunnelStep from 'components/onboarding/steps/UserInfoFunnelStep';
import {NonEmptyArray, OnBoardinStep, StepInfo} from 'types/funnel';

const steps: NonEmptyArray<OnBoardinStep> = ['Step1', 'Step2', 'Step3'];

const stepInfoList: StepInfo<'Step'>[] = [
  {name: 'Step1', component: <DescriptionFunnelStep />},
  {name: 'Step2', component: <LoginFunnelStep />},
  {name: 'Step3', component: <UserInfoFunnelStep />},
];

export default function OnBoardingFunnelScreen() {
  const currentStep = useRecoilValue(onboardingFunnelStepsState);

  return (
    <Funnel steps={steps} step={currentStep}>
      {stepInfoList.map(({name, component}) => (
        <StepContainer key={name} name={name}>
          {component}
        </StepContainer>
      ))}
    </Funnel>
  );
}

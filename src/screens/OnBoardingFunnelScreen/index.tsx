import React, {useState} from 'react';
import type {Steps, NonEmptyArray} from 'types/components/funnel';
import DescriptionStepScreen from 'screens/OnBoardingFunnelScreen/DescriptionStepScreen';
import LoginStepScreen from 'screens/OnBoardingFunnelScreen/LoginStepScreen';
import UserInfoStepScreen from 'screens/OnBoardingFunnelScreen/UserInfoStepScreen';
import Funnel from 'components/@common/Funnel/Funnel';
import Step from 'components/@common/Funnel/Step';

type OnBoardingStep = 'Step1' | 'Step2' | 'Step3';

const steps: NonEmptyArray<OnBoardingStep> = ['Step1', 'Step2', 'Step3'];

const stepInfoList: Steps<typeof steps> = {
  Step1: <DescriptionStepScreen />,
  Step2: <LoginStepScreen />,
  Step3: <UserInfoStepScreen />,
};

export default function OnBoardingFunnelScreen() {
  const [currentStep] = useState<OnBoardingStep>('Step2');

  return (
    <Funnel steps={steps} step={currentStep}>
      {Object.entries(stepInfoList).map(([name, component]) => (
        <Step key={name} name={name}>
          {component}
        </Step>
      ))}
    </Funnel>
  );
}

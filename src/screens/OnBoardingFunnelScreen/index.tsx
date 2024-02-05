import React, {useState} from 'react';
import {NonEmptyArray, Steps} from 'types/components/Funnel';
import Funnel from 'components/@common/Funnel/Funnel';
import Step from 'components/@common/Funnel/Step';
import AccountCategoryDescriptionScreen from 'screens/OnBoardingFunnelScreen/AccountCategoryDescriptionScreen';
import AccountDetailsDescriptionScreen from 'screens/OnBoardingFunnelScreen/AccountDetailsDescriptionScreen';
import AccountTypeDescriptionScreen from 'screens/OnBoardingFunnelScreen/AccountTypeDescriptionScreen';
import LedgerDescriptionScreen from 'screens/OnBoardingFunnelScreen/LedgerDescriptionScreen';
import LoginStepScreen from 'screens/OnBoardingFunnelScreen/LoginStepScreen';

type OnBoardingStep = 'Step1' | 'Step2' | 'Step3' | 'Step4' | 'Step5';

const steps: NonEmptyArray<OnBoardingStep> = [
  'Step1',
  'Step2',
  'Step3',
  'Step4',
  'Step5',
];

export default function OnBoardingFunnelScreen() {
  const [currentStep, setCurrentStep] = useState<OnBoardingStep>('Step2');

  const stepInfoList: Steps<typeof steps> = {
    Step1: <LoginStepScreen />,
    Step2: <LedgerDescriptionScreen onNext={() => setCurrentStep('Step3')} />,
    Step3: (
      <AccountTypeDescriptionScreen onNext={() => setCurrentStep('Step4')} />
    ),
    Step4: (
      <AccountCategoryDescriptionScreen
        onNext={() => setCurrentStep('Step5')}
      />
    ),
    Step5: <AccountDetailsDescriptionScreen />,
  };

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

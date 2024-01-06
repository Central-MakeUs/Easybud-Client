import Funnel from 'components/@common/Funnel/Funnel';
import Step from 'components/@common/Funnel/Step';
import {funnelStepsState} from 'libs/recoil/states/steps';
import {stepInfoList, steps} from 'navigators/constants/steps';
import React from 'react';
import {useRecoilValue} from 'recoil';

export default function OnBoardingFunnel() {
  const {currentStep} = useRecoilValue(funnelStepsState);

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

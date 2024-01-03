import React, {ReactNode} from 'react';
import RecoilSetting from 'libs/recoil';
import ReactQuerySetting from 'libs/react-query';

type AppSetupWrapperProps = {children: ReactNode};

export default function AppSetupWrapper({children}: AppSetupWrapperProps) {
  return (
    <RecoilSetting>
      <ReactQuerySetting>{children}</ReactQuerySetting>
    </RecoilSetting>
  );
}

import React, {ReactNode} from 'react';
import RecoilContainer from 'containers/RecoilContainer';
import ReactQueryContainer from 'containers/ReactQueryContainer';

type AppSetupContainerProps = {children: ReactNode};

export default function AppSetupContainer({children}: AppSetupContainerProps) {
  return (
    <RecoilContainer>
      <ReactQueryContainer>{children}</ReactQueryContainer>
    </RecoilContainer>
  );
}

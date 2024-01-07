import React, {ReactElement} from 'react';
import RecoilContainer from 'containers/RecoilContainer';
import ReactQueryContainer from 'containers/ReactQueryContainer';
import {SafeAreaProvider} from 'react-native-safe-area-context';

type AppSetupContainerProps = {children: ReactElement};

export default function AppSetupContainer({children}: AppSetupContainerProps) {
  return (
    <RecoilContainer>
      <ReactQueryContainer>
        <SafeAreaProvider>{children}</SafeAreaProvider>
      </ReactQueryContainer>
    </RecoilContainer>
  );
}

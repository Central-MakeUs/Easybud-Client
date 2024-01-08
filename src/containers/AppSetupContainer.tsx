import React, {ReactElement} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RecoilContainer from 'containers/RecoilContainer';
import ReactQueryContainer from 'containers/ReactQueryContainer';
import ErrorBoundaryContainer from 'containers/ErrorBoundaryContainer';

type AppSetupContainerProps = {children: ReactElement};

export default function AppSetupContainer({children}: AppSetupContainerProps) {
  return (
    <RecoilContainer>
      <ReactQueryContainer>
        <ErrorBoundaryContainer>
          <SafeAreaProvider>{children}</SafeAreaProvider>
        </ErrorBoundaryContainer>
      </ReactQueryContainer>
    </RecoilContainer>
  );
}

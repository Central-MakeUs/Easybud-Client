import React, {ReactElement} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RecoilContainer from 'containers/RecoilContainer';
import ReactQueryContainer from 'containers/ReactQueryContainer';
import ErrorBoundaryContainer from 'containers/ErrorBoundaryContainer';
import NavigatorContainer from 'containers/NavigatorContainer';

type AppSetupContainerProps = {children: ReactElement};

export default function AppSetupContainer({children}: AppSetupContainerProps) {
  return (
    <RecoilContainer>
      <ReactQueryContainer>
        <NavigatorContainer>
          <ErrorBoundaryContainer>
            <SafeAreaProvider>{children}</SafeAreaProvider>
          </ErrorBoundaryContainer>
        </NavigatorContainer>
      </ReactQueryContainer>
    </RecoilContainer>
  );
}

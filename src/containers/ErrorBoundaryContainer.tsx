import {ReactElement} from 'react';
import {LogBox} from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import FallbackErrorScreen from 'screens/FallbackErrorScreen';

// https://reactnavigation.org/docs/troubleshooting/
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

type ErrorBoundaryContainerProps = {children: ReactElement};

export default function ErrorBoundaryContainer({
  children,
}: ErrorBoundaryContainerProps) {
  return (
    <ErrorBoundary FallbackComponent={FallbackErrorScreen}>
      {children}
    </ErrorBoundary>
  );
}

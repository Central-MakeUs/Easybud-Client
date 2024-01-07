import {ReactElement} from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import FallbackErrorScreen from 'screens/FallbackErrorScreen';

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

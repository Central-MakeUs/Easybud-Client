import React, {ReactElement} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import ErrorBoundary from 'react-native-error-boundary';
import FallbackErrorScreen from 'screens/FallbackErrorScreen';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
    },
    mutations: {
      throwOnError: true,
    },
  },
});

type ReactQueryContainerProps = {children: ReactElement};

export default function ReactQueryContainer({
  children,
}: ReactQueryContainerProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary FallbackComponent={FallbackErrorScreen}>
        {children}
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

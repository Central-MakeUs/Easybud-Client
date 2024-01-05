import React, {ReactNode} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

type ReactQueryContainerProps = {children: ReactNode};

export default function ReactQueryContainer({
  children,
}: ReactQueryContainerProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

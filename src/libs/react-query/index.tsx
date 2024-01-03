import React, {ReactNode} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

type ReactQuerySettingProps = {children: ReactNode};

export default function ReactQuerySetting({children}: ReactQuerySettingProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

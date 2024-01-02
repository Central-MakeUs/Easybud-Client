import {RecoilRoot} from 'recoil';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import Navigator from 'navigators/Navigator';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Navigator />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;

// import StorybookUIRoot from './.ondevice/Storybook';
// export {StorybookUIRoot as default};

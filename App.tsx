import {View} from 'react-native';
import {RecoilRoot} from 'recoil';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <View />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;

// import StorybookUIRoot from './.ondevice/Storybook';
// export {StorybookUIRoot as default};

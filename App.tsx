import Navigator from 'containers/NavigatorContainer';
import AppSetupWrapper from 'containers/AppSetupContainer';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <AppSetupWrapper>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </AppSetupWrapper>
  );
};

export default App;

/** storybook 실행용 */
// import StorybookUIRoot from './.ondevice/Storybook';
// export {StorybookUIRoot as default};

import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppSetupWrapper from 'containers/AppSetupContainer';
import RootStackNavigator from 'navigators/RootStackNavigator';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);

  return (
    <AppSetupWrapper>
      <RootStackNavigator />
    </AppSetupWrapper>
  );
};

export default App;

/** storybook 실행용 */
// import StorybookUIRoot from './.ondevice/Storybook';
// export {StorybookUIRoot as default};

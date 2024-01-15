import AppSetupWrapper from 'containers/AppSetupContainer';
import RootStackNavigator from 'navigators/RootStackNavigator';

const App = () => {
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

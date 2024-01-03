import Navigator from 'navigators/Navigator';
import AppSetupWrapper from 'libs/AppSetupWrapper';

const App = () => {
  return (
    <AppSetupWrapper>
      <Navigator />
    </AppSetupWrapper>
  );
};

export default App;

/** storybook 실행용 */
// import StorybookUIRoot from './.ondevice/Storybook';
// export {StorybookUIRoot as default};

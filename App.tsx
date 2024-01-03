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

// import StorybookUIRoot from './.ondevice/Storybook';
// export {StorybookUIRoot as default};

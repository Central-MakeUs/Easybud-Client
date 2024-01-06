import Navigator from 'containers/NavigatorContainer';
import AppSetupWrapper from 'containers/AppSetupContainer';

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

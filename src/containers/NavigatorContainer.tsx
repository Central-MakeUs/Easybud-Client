import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from 'navigators/StackNavigator';
import {lightPalette, theme} from 'styles';

const globalTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...lightPalette,
    background: theme.palette.gray1,
  },
};

const NavigatorContainer = () => {
  return (
    <NavigationContainer theme={globalTheme}>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default NavigatorContainer;

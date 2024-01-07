import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from 'navigators/StackNavigator';
import {lightPalette} from 'styles';

const theme = {
  ...DefaultTheme,
  colors: {...DefaultTheme.colors, ...lightPalette},
};

const NavigatorContainer = () => {
  return (
    <NavigationContainer theme={theme}>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default NavigatorContainer;

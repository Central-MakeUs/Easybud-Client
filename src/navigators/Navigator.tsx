import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import StackNavigator from 'navigators/StackNavigator';
import {lightPalette} from 'styles';

const theme = {
  ...DefaultTheme,
  colors: {...DefaultTheme.colors, ...lightPalette},
};

const Navigator = () => {
  return (
    <NavigationContainer theme={theme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;

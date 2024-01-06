import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import StackNavigator from 'navigators/StackNavigator';
import {useState} from 'react';
import {lightPalette} from 'styles';

const theme = {
  ...DefaultTheme,
  colors: {...DefaultTheme.colors, ...lightPalette},
};

const NavigatorContainer = () => {
  // TODO 로그인 처리 후 상태 변경 필요
  const [isLoggedIn, _] = useState(true);

  return (
    <NavigationContainer theme={theme}>
      <StackNavigator isLoggedIn={isLoggedIn} />
    </NavigationContainer>
  );
};

export default NavigatorContainer;

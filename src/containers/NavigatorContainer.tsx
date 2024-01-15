import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {ReactElement} from 'react';
import {lightPalette, theme} from 'styles';

const globalTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...lightPalette,
    background: theme.palette.white,
  },
};
type NavigatorContainerProps = {children: ReactElement};

const NavigatorContainer = ({children}: NavigatorContainerProps) => {
  return (
    <NavigationContainer theme={globalTheme}>{children}</NavigationContainer>
  );
};

export default NavigatorContainer;

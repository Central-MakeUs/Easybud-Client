import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from 'navigators/StackNavigator';

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;

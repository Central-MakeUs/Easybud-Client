import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StackMenu} from 'constants/menu';
import Home from 'screens/Home';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={StackMenu.Home} component={Home} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

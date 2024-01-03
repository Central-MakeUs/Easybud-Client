import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StackMenu} from 'navigators/constants';
import {StackParamList} from 'navigators/types';
import Home from 'screens/Home';

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={StackMenu.Home} component={Home} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

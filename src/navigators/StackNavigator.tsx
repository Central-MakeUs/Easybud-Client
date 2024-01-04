import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from 'navigators/TabNavigator';
import {StackMenu} from 'navigators/constants';
import {StackParamList} from 'navigators/types';
import Home from 'screens/Home';

const Stack = createNativeStackNavigator<StackParamList>();

const screenOptions = {
  headerShown: false,
  headerShadowVisible: false,
};

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={StackMenu.TabNavigator} component={TabNavigator} />
      <Stack.Screen name={StackMenu.Home} component={Home} />
    </Stack.Navigator>
  );
}

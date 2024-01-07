import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {AddTransactionStackParamList} from 'navigators/types';
import AddTransactionScreen from 'screens/AddTransactionStack/AddTransactionScreen';
import BasicTransactionScreen from 'screens/AddTransactionStack/BasicTransactionScreen';

const Stack = createNativeStackNavigator<AddTransactionStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  headerShadowVisible: false,
};

export default function AddTransactionStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={'BasicTransaction'}
      screenOptions={screenOptions}>
      <Stack.Screen name={'AddTransaction'} component={AddTransactionScreen} />
      <Stack.Screen
        name={'BasicTransaction'}
        component={BasicTransactionScreen}
      />
    </Stack.Navigator>
  );
}

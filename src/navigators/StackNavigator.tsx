import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from 'navigators/TabNavigator';
import {StackMenu} from 'navigators/constants/menu';
import {StackParamList} from 'navigators/types';
import Description from 'screens/OnBoarding/Description';
import Login from 'screens/OnBoarding/Login';
import UserInfo from 'screens/OnBoarding/UserInfo';

const Stack = createNativeStackNavigator<StackParamList>();

const screenOptions = {
  headerShown: false,
  headerShadowVisible: false,
};

type StackNavigatorProps = {
  isLoggedIn: boolean;
};

export default function StackNavigator({isLoggedIn}: StackNavigatorProps) {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {isLoggedIn ? (
        <>
          <Stack.Screen name={StackMenu.Description} component={Description} />
          <Stack.Screen name={StackMenu.Login} component={Login} />
          <Stack.Screen name={StackMenu.UserInfo} component={UserInfo} />
        </>
      ) : (
        <>
          <Stack.Screen
            name={StackMenu.TabNavigator}
            component={TabNavigator}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

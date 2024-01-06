import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useAppInitial from 'hooks/useAppInitial';
import TabNavigator from 'navigators/TabNavigator';
import {StackMenu} from 'navigators/constants/menu';
import {StackParamList} from 'navigators/types';
import OnBoardingFunnel from 'screens/OnBoarding';

const Stack = createNativeStackNavigator<StackParamList>();

const screenOptions = {
  headerShown: false,
  headerShadowVisible: false,
};

export default function StackNavigator() {
  const {isAuthenticated, isVerifyTokenLoading} = useAppInitial();

  if (isVerifyTokenLoading) {
    return null; // Todo: global loading
  }

  return (
    <Stack.Navigator
      initialRouteName={
        isAuthenticated ? StackMenu.TabNavigator : StackMenu.OnBoarding
      }
      screenOptions={screenOptions}>
      {isAuthenticated ? (
        <Stack.Screen name={StackMenu.TabNavigator} component={TabNavigator} />
      ) : (
        <Stack.Screen
          name={StackMenu.OnBoarding}
          component={OnBoardingFunnel}
        />
      )}
    </Stack.Navigator>
  );
}

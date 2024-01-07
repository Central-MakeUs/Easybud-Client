import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import useInitialData from 'hooks/useInitialData';
import TabNavigator from 'navigators/TabNavigator';
import {RootStackParamList} from 'navigators/types';
import AddTransactionScreen from 'screens/AddTransactionScreen';
import OnBoardingFunnelScreen from 'screens/OnBoardingFunnelScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  headerShadowVisible: false,
  headerBackTitleVisible: false,
};

export default function RootStackNavigator() {
  const {isAuthenticated, isVerifyTokenLoading} = useInitialData();

  const initialRouteName = isAuthenticated ? 'TabNavigator' : 'OnBoarding';

  if (isVerifyTokenLoading) {
    return null; // Todo: global loading
  }

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={screenOptions}>
      {isAuthenticated ? (
        <>
          <Stack.Screen name={'TabNavigator'} component={TabNavigator} />
          <Stack.Screen
            name={'AddTransaction'}
            component={AddTransactionScreen}
            options={{
              headerShown: true,
              headerTitle: '거래 추가',
            }}
          />
        </>
      ) : (
        <Stack.Screen name={'OnBoarding'} component={OnBoardingFunnelScreen} />
      )}
    </Stack.Navigator>
  );
}

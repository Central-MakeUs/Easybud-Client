import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import useInitialData from 'hooks/useInitialData';
import AddTransactionStackNavigator from 'navigators/AddTransactionStackNavigator';
import TabNavigator from 'navigators/TabNavigator';
import {RootStackParamList} from 'navigators/types';
import OnBoardingFunnelScreen from 'screens/OnBoardingFunnelScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  headerShadowVisible: false,
  headerBackTitleVisible: false,
};

export default function RootStackNavigator() {
  const {isAuthenticated, isVerifyTokenLoading} = useInitialData();

  const initialRouteName = isAuthenticated ? 'Tab' : 'OnBoarding';

  if (isVerifyTokenLoading) {
    return null; // Todo: global loading
  }

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={screenOptions}>
      {isAuthenticated ? (
        <>
          <Stack.Screen name={'Tab'} component={TabNavigator} />
          <Stack.Screen
            name={'AddTransactionStack'}
            component={AddTransactionStackNavigator}
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

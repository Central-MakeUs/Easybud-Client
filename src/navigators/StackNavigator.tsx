import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useInitialData from 'hooks/useInitialData';
import TabNavigator from 'navigators/TabNavigator';
import {RootStackParamList} from 'navigators/types';
import AddTransaction from 'screens/AddTransaction';
import OnBoardingFunnel from 'screens/OnBoarding';

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = {
  headerShown: false,
  headerShadowVisible: false,
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
          <Stack.Screen name={'AddTransaction'} component={AddTransaction} />
        </>
      ) : (
        <Stack.Screen name={'OnBoarding'} component={OnBoardingFunnel} />
      )}
    </Stack.Navigator>
  );
}

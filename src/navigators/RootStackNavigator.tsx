import {TouchableOpacity} from 'react-native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import useInitialData from 'hooks/useInitialData';
import AddTransactionStackNavigator from 'navigators/AddTransactionStackNavigator';
import TabNavigator from 'navigators/TabNavigator';
import {RootStackNavigationProp, RootStackParamList} from 'navigators/types';
import OnBoardingFunnelScreen from 'screens/OnBoardingFunnelScreen';
import Icon from 'components/@common/Icon';
import {theme} from 'styles';

const Stack = createNativeStackNavigator<RootStackParamList>();

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
              headerBackTitleVisible: true,
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

const screenOptions: (props: {
  navigation: RootStackNavigationProp;
}) => NativeStackNavigationOptions = ({navigation}) => ({
  headerShown: false,
  headerShadowVisible: false,
  headerBackTitleVisible: false,
  headerLeft: props => (
    <TouchableOpacity
      {...props}
      onPress={() => (navigation.canGoBack() ? navigation.goBack() : null)}>
      <Icon name="X" />
    </TouchableOpacity>
  ),
  headerStyle: {backgroundColor: theme.palette.gray1},
  headerTitleStyle: theme.typography.Body1Semibold,
});

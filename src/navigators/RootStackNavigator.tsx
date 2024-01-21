import {TouchableOpacity} from 'react-native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {theme} from 'styles';
import {RootStackNavigationProp, RootStackParamList} from 'navigators/types';
import useInitialData from 'hooks/useInitialData';
import OnBoardingFunnelScreen from 'screens/OnBoardingFunnelScreen';
import AuthenticatedScreens from 'screens/AuthenticatedScreens';
import Icon from 'components/@common/Icon';

export const Stack = createNativeStackNavigator<RootStackParamList>();

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
        <AuthenticatedScreens />
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
  headerStyle: {
    height: 50,
    borderWidth: 1,
    backgroundColor: theme.palette.gray1,
  },
  headerTitleStyle: theme.typography.Body1Semibold,
});

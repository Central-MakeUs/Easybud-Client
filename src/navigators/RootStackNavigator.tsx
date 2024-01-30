import {TouchableOpacity} from 'react-native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {theme} from 'styles';
import {RootStackNavigationProp, RootStackParamList} from 'navigators/types';
import CreateTransactionStackNavigator from 'navigators/CreateTransactionStackNavigator';
import TabNavigator from 'navigators/TabNavigator';
import useInitialData from 'hooks/useInitialData';
import SettingScreen from 'screens/SettingScreen';
import OnBoardingFunnelScreen from 'screens/OnBoardingFunnelScreen';
import CardSettingScreen from 'screens/SettingScreen/AddCardScreen';
import AddCardScreen from 'screens/SettingScreen/CardListScreen';
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
        <>
          <Stack.Screen name={'Tab'} component={TabNavigator} />
          <Stack.Screen
            name={'CreateTransactionStack'}
            component={CreateTransactionStackNavigator}
            options={{
              headerShown: true,
              headerBackTitleVisible: true,
              headerTitle: '거래 추가',
              // note: navigation.push()로 인해 새 계정 추가 시 아래 설정으로 stack이 쌓이기에 통일성을 위해 변경하지 않음
              // presentation: 'containedModal',
            }}
          />
          <Stack.Screen
            name={'Setting'}
            component={SettingScreen}
            options={{
              headerShown: true,
              headerBackTitleVisible: true,
              headerTitle: '설정',
            }}
          />
          <Stack.Screen
            name={'AddCard'}
            component={AddCardScreen}
            options={{
              headerShown: true,
              headerBackTitleVisible: true,
              headerTitle: '카드 설정',
            }}
          />
          <Stack.Screen
            name={'CardSetting'}
            component={CardSettingScreen}
            options={{
              headerShown: true,
              headerBackTitleVisible: true,
              headerTitle: '카드 설정',
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
  headerStyle: {
    height: 50,
    borderWidth: 1,
    backgroundColor: theme.palette.gray1,
  },
  headerTitleStyle: {
    ...theme.typography.Body1Semibold,
  },
  headerTitleAlign: 'center',
});

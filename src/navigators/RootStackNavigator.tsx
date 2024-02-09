import {TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {theme} from 'styles';
import {RootStackNavigationProp} from 'navigators/types';
import CreateTransactionStackNavigator from 'navigators/CreateTransactionStackNavigator';
import TabNavigator from 'navigators/TabNavigator';
import useTransaction from 'hooks/useTransaction';
import useInitialData from 'hooks/useInitialData';
import {Stack} from 'navigators/constants/stack';
import SettingScreen from 'screens/SettingScreen';
import OnBoardingFunnelScreen from 'screens/OnBoardingFunnelScreen';
import AddCardScreen from 'screens/SettingScreen/AddCardScreen';
import CardListScreen from 'screens/SettingScreen/CardListScreen';
import Icon from 'components/@common/Icon';

export default function RootStackNavigator() {
  const {authData, isVerifyTokenLoading} = useInitialData();

  const initialRouteName = authData.isAuthenticated ? 'Tab' : 'OnBoarding';

  if (isVerifyTokenLoading) {
    return null; // Todo: global loading
  }

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={screenOptions}>
      {!authData.isAuthenticated ? (
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
            name={'CardList'}
            component={CardListScreen}
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
}) => NativeStackNavigationOptions = () => ({
  headerShown: false,
  headerShadowVisible: false,
  headerBackTitleVisible: false,
  headerLeft: () => <CloseButton />,
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

const CloseButton = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {clearTransaction} = useTransaction();

  return (
    <TouchableOpacity
      onPress={() => {
        clearTransaction();

        if (route.name === 'CardList' || route.name === 'AddCard') {
          navigation.goBack();
        } else {
          navigation.navigate('Tab', {screen: 'Ledger'});
        }
      }}>
      <Icon name="X" />
    </TouchableOpacity>
  );
};

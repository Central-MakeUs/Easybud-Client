import {useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {useSetRecoilState} from 'recoil';
import {getProfile} from '@react-native-seoul/kakao-login';
import {theme} from 'styles';
import {RootStackNavigationProp} from 'navigators/types';
import CreateTransactionStackNavigator from 'navigators/CreateTransactionStackNavigator';
import TabNavigator from 'navigators/TabNavigator';
import useTransaction from 'hooks/useTransaction';
import useInitialData from 'hooks/useInitialData';
import {axiosApi} from 'apis/axiosInstance';
import localStorage from 'libs/async-storage';
import {TokenKeys} from 'libs/async-storage/constants/keys';
import {userInfoState} from 'libs/recoil/states/userInfo';
import {authApi} from 'apis/authApi';
import {Stack} from 'navigators/constants/stack';
import SettingScreen from 'screens/SettingScreen';
import OnBoardingFunnelScreen from 'screens/OnBoardingFunnelScreen';
import AddCardScreen from 'screens/SettingScreen/AddCardScreen';
import CardListScreen from 'screens/SettingScreen/CardListScreen';
import Icon from 'components/@common/Icon';

export default function RootStackNavigator() {
  const {authData, setAuthData} = useInitialData();
  const setUserInfo = useSetRecoilState(userInfoState);

  const initialRouteName = authData.isAuthenticated ? 'Tab' : 'OnBoarding';

  useEffect(() => {
    const autoLogin = async () => {
      const refreshToken = await localStorage.get(TokenKeys.RefreshToken);

      if (refreshToken !== null) {
        try {
          const response = await axiosApi.post('auth/reissue', {
            refreshToken,
          });

          const result = response.data.result;

          localStorage.set(TokenKeys.AccessToken, result.accessToken);
          localStorage.set(TokenKeys.RefreshToken, result.refreshToken);

          if (!!result.accessToken && !!result.refreshToken) {
            const userProfile = await getProfile();
            setUserInfo({username: userProfile.nickname});

            setAuthData({isAuthenticated: true});
          }
        } catch (e) {
          const response = await authApi.postLogoutUser({refreshToken});
          return response.data;
        }
      }
    };

    autoLogin();
  }, [setAuthData, setUserInfo]);

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={screenOptions}>
      {authData.isAuthenticated ? (
        <>
          <Stack.Screen name={'Tab'} component={TabNavigator} />
          <Stack.Screen
            name={'CreateTransactionStack'}
            component={CreateTransactionStackNavigator}
            options={{
              headerShown: true,
              headerBackTitleVisible: true,
              headerTitle: '거래 추가',
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

import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {theme} from 'styles';
import {typographyStyles} from 'styles/typography';
import {
  TabRouteProp,
  TabParamList,
  RootStackNavigationProp,
} from 'navigators/types';
import CreateTransactionButton from 'navigators/components/CreateTransactionButton';
import TabBarIcon from 'navigators/components/TabBarIcon';
import NullScreen from 'navigators/components/NullScreen';
import LedgerScreen from 'screens/Tab/LedgerScreen';
import TransactionScreen from 'screens/Tab/TransactionScreen';
import Icon from 'components/@common/Icon';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  const {bottom: bottomSize} = useSafeAreaInsets();

  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        ...screenOptions({route, bottomSize, navigation}),
      })}>
      <Tab.Screen
        name={'Ledger'}
        component={LedgerScreen}
        options={{tabBarLabel: '장부'}}
      />
      <Tab.Screen
        name={'NavigateCreateTransaction'}
        component={NullScreen}
        options={{tabBarLabel: ''}}
      />
      <Tab.Screen
        name={'Transaction'}
        component={TransactionScreen}
        options={{tabBarLabel: '거래'}}
      />
    </Tab.Navigator>
  );
}

const screenOptions: (props: {
  route: TabRouteProp;
  bottomSize: number;
  navigation: RootStackNavigationProp;
}) => BottomTabNavigationOptions = ({route, bottomSize, navigation}) => ({
  tabBarIcon:
    route.name === 'NavigateCreateTransaction'
      ? CreateTransactionButton
      : ({focused}: {focused: boolean}) => (
          <TabBarIcon routeName={route.name} focused={focused} />
        ),
  tabBarIconStyle: {
    marginTop: route.name === 'NavigateCreateTransaction' ? 18 : 4,
  },
  tabBarActiveTintColor: theme.palette.primary,
  tabBarInactiveTintColor: theme.palette.gray4,
  tabBarStyle: {
    height: bottomSize ? 50 + bottomSize : 60,
    borderTopColor: theme.palette.gray1,
  },
  tabBarItemStyle: {
    gap: 0,
    paddingVertical: 4,
  },
  tabBarLabelStyle: {
    ...typographyStyles.Body3Regular,
    marginBottom: bottomSize ? 0 : 4,
  },
  headerStyle: {
    height: 50,
    backgroundColor: theme.palette.gray1,
  },
  headerShadowVisible: false,
  headerTitle: '로고',
  headerTitleStyle: theme.typography.Body1Semibold,
  headerRightContainerStyle: {
    paddingRight: 15,
  },
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
      <Icon name={'Setting'} size={24} />
    </TouchableOpacity>
  ),
});

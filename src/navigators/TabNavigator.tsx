import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {theme} from 'styles';
import {TabBarLabel} from 'navigators/constants/label';
import {TabRouteProps, TabParamList} from 'navigators/types';
import AccountScreen from 'screens/Tab/AccountScreen';
import LedgerScreen from 'screens/Tab/LedgerScreen';
import SettingScreen from 'screens/Tab/SettingScreen';
import TransactionScreen from 'screens/Tab/TransactionScreen';
import AddTransactionButton from 'navigators/components/AddTransactionButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TabBarIcon from 'navigators/components/TabBarIcon';
import NullScreen from 'navigators/components/NullScreen';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  const {bottom: bottomSize} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({route}) => screenOptions({route, bottomSize})}>
      <Tab.Screen
        name={'Ledger'}
        component={LedgerScreen}
        options={{tabBarLabel: TabBarLabel.Ledger}}
      />
      <Tab.Screen
        name={'Transaction'}
        component={TransactionScreen}
        options={{tabBarLabel: TabBarLabel.Transaction}}
      />
      <Tab.Screen
        name={'NavigateAddTransaction'}
        component={NullScreen}
        options={{tabBarLabel: TabBarLabel.AddTransaction}}
      />
      <Tab.Screen
        name={'Account'}
        component={AccountScreen}
        options={{tabBarLabel: TabBarLabel.Account}}
      />
      <Tab.Screen
        name={'Setting'}
        component={SettingScreen}
        options={{tabBarLabel: TabBarLabel.Setting}}
      />
    </Tab.Navigator>
  );
}

const screenOptions: (props: {
  route: TabRouteProps;
  bottomSize: number;
}) => BottomTabNavigationOptions = ({route, bottomSize}) => ({
  tabBarIcon:
    route.name === 'NavigateAddTransaction'
      ? AddTransactionButton
      : ({focused}: {focused: boolean}) => (
          <TabBarIcon routeName={route.name} focused={focused} />
        ),
  tabBarIconStyle: {
    marginTop: route.name === 'NavigateAddTransaction' ? 18 : 4,
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
    // Todo: 타이포 변경 시 변경 필요
    fontSize: 10,
    fontWeight: '500' as const,
    marginBottom: bottomSize ? 0 : 4,
  },
  headerShown: false,
  headerShadowVisible: false,
});

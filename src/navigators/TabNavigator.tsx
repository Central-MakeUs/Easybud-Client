import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {theme} from 'styles';
import {TabMenu} from 'navigators/constants/menu';
import {TabNavigatorIcon} from 'navigators/constants/icon';
import {TabBarLabel} from 'navigators/constants/label';
import {TabRouteProps, TabParamList, TabScreenName} from 'navigators/types';
import Account from 'screens/Account';
import Ledger from 'screens/Ledger';
import Setting from 'screens/Setting';
import Transaction from 'screens/Transaction';
import AddTransaction from 'screens/AddTransaction';
import Icon from 'components/Icon';

const Tab = createBottomTabNavigator<TabParamList>();

const getTabBarIcon = (routeName: TabScreenName, focused: boolean) => {
  const iconColor =
    routeName === 'AddTransaction' ? 'primary' : focused ? 'primary' : 'gray4';
  const iconSize = routeName === 'AddTransaction' ? 44 : 24;

  return (
    <Icon name={TabNavigatorIcon[routeName]} fill={iconColor} size={iconSize} />
  );
};

const screenOptions = ({route}: TabRouteProps) => ({
  tabBarIcon: ({focused}: {focused: boolean}) =>
    getTabBarIcon(route.name, focused),
  tabBarIconStyle: {
    marginTop: route.name === 'AddTransaction' ? 15 : 7,
  },
  tabBarActiveTintColor: theme.palette.primary,
  tabBarInactiveTintColor: theme.palette.gray4,
  tabBarStyle: {
    height: 79.2,
  },
  tabBarLabelStyle: {
    // 타이포 변경 시 변경 필요
    fontSize: 10,
    fontWeight: '500' as const,
    marginBottom: route.name === 'AddTransaction' ? 29 : 32,
  },
  headerShown: false,
  headerShadowVisible: false,
});

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={TabMenu.Ledger}
        component={Ledger}
        options={{tabBarLabel: TabBarLabel.Ledger}}
      />
      <Tab.Screen
        name={TabMenu.Transaction}
        component={Transaction}
        options={{tabBarLabel: TabBarLabel.Transaction}}
      />
      <Tab.Screen
        name={TabMenu.AddTransaction}
        component={AddTransaction}
        options={{tabBarLabel: TabBarLabel.AddTransaction}}
      />
      <Tab.Screen
        name={TabMenu.Account}
        component={Account}
        options={{tabBarLabel: TabBarLabel.Account}}
      />
      <Tab.Screen
        name={TabMenu.Setting}
        component={Setting}
        options={{tabBarLabel: TabBarLabel.Setting}}
      />
    </Tab.Navigator>
  );
}

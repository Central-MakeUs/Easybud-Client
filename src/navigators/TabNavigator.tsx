import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
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
import {RouteProp} from '@react-navigation/native';

const Tab = createBottomTabNavigator<TabParamList>();

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

const getTabBarIcon = (routeName: TabScreenName, focused: boolean) => {
  const iconColor =
    routeName === TabMenu.AddTransaction || focused ? 'primary' : 'gray4';
  const iconSize = routeName === TabMenu.AddTransaction ? 44 : 24;

  return (
    <Icon name={TabNavigatorIcon[routeName]} fill={iconColor} size={iconSize} />
  );
};

const screenOptions: (props: {
  route: RouteProp<TabParamList, keyof TabParamList>;
}) => BottomTabNavigationOptions = ({route}: TabRouteProps) => ({
  tabBarIcon: ({focused}: {focused: boolean}) =>
    getTabBarIcon(route.name, focused),
  tabBarIconStyle: {
    paddingBottom: 2,
    marginTop: route.name === TabMenu.AddTransaction ? 17 : 0,
  },
  tabBarActiveTintColor: theme.palette.primary,
  tabBarInactiveTintColor: theme.palette.gray4,
  tabBarStyle: {
    borderTopColor: theme.palette.gray1,
  },
  tabBarItemStyle: {
    paddingVertical: 4,
  },
  tabBarLabelStyle: {
    // Todo: 타이포 변경 시 변경 필요
    fontSize: 10,
    fontWeight: '500' as const,
  },
  headerShown: false,
  headerShadowVisible: false,
});

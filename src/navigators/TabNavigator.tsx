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
import Icon from 'components/@common/Icon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  const {bottom: bottomSize} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({route}) => screenOptions({route, bottomSize})}>
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

const screenOptions: (
  props: TabRouteProps & {bottomSize: number},
) => BottomTabNavigationOptions = ({route, bottomSize}) => ({
  tabBarIcon: ({focused}: {focused: boolean}) =>
    getTabBarIcon(route.name, focused),
  tabBarIconStyle: {
    marginTop: route.name === TabMenu.AddTransaction ? 17 : 4,
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

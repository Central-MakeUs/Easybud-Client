import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabMenu} from 'navigators/constants';
import {TabParamList} from 'navigators/types';
import Account from 'screens/Account';
import Ledger from 'screens/Ledger';
import Setting from 'screens/Setting';
import Transaction from 'screens/Transaction';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={TabMenu.Ledger} component={Ledger} />
      <Tab.Screen name={TabMenu.Transaction} component={Transaction} />
      <Tab.Screen name={TabMenu.Account} component={Account} />
      <Tab.Screen name={TabMenu.Setting} component={Setting} />
    </Tab.Navigator>
  );
}

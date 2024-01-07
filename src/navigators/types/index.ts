import {RouteProp} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

/** param list */

export type RootStackParamList = {
  TabNavigator: undefined;
  OnBoarding: undefined;
  AddTransaction: undefined;
};

export type TabParamList = {
  Ledger: undefined;
  Transaction: undefined;
  NavigateAddTransaction: undefined;
  Account: undefined;
  Setting: undefined;
};

/** screen list */

export type TabScreenName = keyof TabParamList;
export type RootStackScreenName = keyof RootStackParamList;

/** route props */

export type TabRouteProps = RouteProp<TabParamList, TabScreenName>;

/** screen props - unused*/

export type MainStackScreenProps<T extends RootStackScreenName> =
  StackScreenProps<RootStackParamList, T>;

/** navigation에 type 지정 */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

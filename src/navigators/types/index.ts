import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

/** param list */

export type RootStackParamList = {
  TabNavigator: NavigatorScreenParams<TabParamList>;
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

/** global type for navigation */
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

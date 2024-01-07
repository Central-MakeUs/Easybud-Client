import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackScreenProps} from '@react-navigation/stack';

/** param list */

export type RootStackParamList = {
  Tab: NavigatorScreenParams<TabParamList>;
  OnBoarding: undefined;
  AddTransactionStack: NavigatorScreenParams<AddTransactionStackParamList>;
};

export type AddTransactionStackParamList = {
  AddTransaction: undefined;
  BasicTransaction: undefined;
};

export type TabParamList = {
  Ledger: undefined;
  Transaction: undefined;
  NavigateAddTransaction: undefined;
  Account: undefined;
  Setting: undefined;
};

/** screen name */

export type TabScreenName = keyof TabParamList;
export type RootStackScreenName = keyof RootStackParamList;

/** route props */

export type TabRouteProps = RouteProp<TabParamList, TabScreenName>;

/** navigation props */

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

/** screen props - unused*/

export type MainStackScreenProps<T extends RootStackScreenName> =
  StackScreenProps<RootStackParamList, T>;

/** navigation에 type 지정 */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

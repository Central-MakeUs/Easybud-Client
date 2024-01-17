import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {NewTransaction} from 'types/transaction';

/** param list */

export type RootStackParamList = {
  Tab?: NavigatorScreenParams<TabParamList>;
  OnBoarding: undefined;
  CreateTransactionStack: NavigatorScreenParams<CreateTransactionStackParamList>;
};

export type CreateTransactionStackParamList = {
  DebitCreditDecider: {transaction: NewTransaction} | undefined;
  AccountType: {transaction: NewTransaction} | undefined;
  AccountAmount: {transaction: NewTransaction} | undefined;
  TransactionConfirmation: {transaction: NewTransaction} | undefined;
};

export type TabParamList = {
  Ledger: undefined;
  Transaction: undefined;
  NavigateCreateTransaction: undefined;
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
  NativeStackScreenProps<RootStackParamList, T>;

/** navigation에 type 지정 */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

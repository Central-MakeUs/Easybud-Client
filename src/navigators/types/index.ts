import {
  NavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
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
  Setting: undefined;
};

export type TabParamList = {
  Ledger: undefined;
  Transaction: undefined;
  NavigateCreateTransaction: undefined;
};

type Params = {transaction: NewTransaction; prevScreen?: string} | undefined;
export type CreateTransactionStackParamList = {
  BasicTransactionInfo: Params;
  DebitCreditDecider: Params;
  AccountType: Params;
  AccountAmount: Params;
  TransactionConfirmation: Params;
};

/** screen name */

export type TabScreenName = keyof TabParamList;
type RootStackScreenName = keyof RootStackParamList;
type CreateTransactionStackScreenName = keyof CreateTransactionStackParamList;

/** route props */

export type TabRouteProp = RouteProp<TabParamList, TabScreenName>;
export type CreateTransactionStackRouteProp<
  T extends CreateTransactionStackScreenName,
> = RouteProp<CreateTransactionStackParamList, T>;

/** navigation props */

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export type CreateTransactionStackNavigationProp =
  NativeStackNavigationProp<CreateTransactionStackParamList>;

export type TabNavigationProp = NavigationProp<TabParamList>;

/** screen props - unused*/

export type RootStackScreenProp<T extends RootStackScreenName> =
  NativeStackScreenProps<RootStackParamList, T>;

/** navigation에 type 지정 */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

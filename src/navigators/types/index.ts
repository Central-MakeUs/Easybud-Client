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

export type TabParamList = {
  Ledger: undefined;
  Transaction: undefined;
  NavigateCreateTransaction: undefined;
  Account: undefined;
  Setting: undefined;
};

type Props = Update | Create;

// only navigate this screen
type Update = {
  transaction: NewTransaction;
  isUpdateStep: true;
  accountIndex: number; // 0일 경우 Step 1 수정
};

// navigate step by step
type Create = {
  transaction: NewTransaction;
  isUpdateStep?: false | undefined;
  accountIndex?: never; // account length
};

export type CreateTransactionStackParamList = {
  BasicTransactionInfo: Update | undefined;
  AccountType: Props;
  AccountCategory: Props;
  AccountAmount: Props;
  TransactionConfirmation: Props;
};

/** screen name */

export type TabScreenName = keyof TabParamList;
type RootStackScreenName = keyof RootStackParamList;
export type CreateTransactionStackScreenName =
  keyof CreateTransactionStackParamList;

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

/** screen props - unused*/

export type RootStackScreenProp<T extends RootStackScreenName> =
  NativeStackScreenProps<RootStackParamList, T>;

/** navigation에 type 지정 */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

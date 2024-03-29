import {
  NavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

/** param list */

export type RootStackParamList = {
  Tab?: NavigatorScreenParams<TabParamList>;
  OnBoarding: undefined;
  CreateTransactionStack: NavigatorScreenParams<CreateTransactionStackParamList>;
  Setting: undefined;
  CardList: undefined;
  AddCard: undefined;
};

export type TabParamList = {
  Ledger: undefined;
  Transaction: undefined;
  NavigateCreateTransaction: undefined;
};

export type OnBoardingParamList = {
  Step1: undefined;
  Step2: undefined;
  Step3: undefined;
  Step4: undefined;
  Step5: undefined;
};

// only navigate this screen
type Update = {
  isUpdateStep: true;
  accountIndex: number;
};

// navigate step by step
type Create = {
  isUpdateStep?: false | undefined;
  accountIndex: number;
};

export type CreateTransactionStackParamList = {
  BasicTransactionInfo: undefined | {isUpdateStep: true};
  AccountType: Create | Update;
  AccountCategory: Create | Update;
  AccountAmount: Create | Update;
  TransactionConfirmation: undefined;
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

export type TabNavigationProp = NavigationProp<TabParamList>;

export type OnBoardingNavigationProp = NavigationProp<OnBoardingParamList>;

/** screen props - unused*/

export type RootStackScreenProp<T extends RootStackScreenName> =
  NativeStackScreenProps<RootStackParamList, T>;

/** navigation에 type 지정 */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

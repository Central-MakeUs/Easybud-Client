import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

export type MainStackParamList = {
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

export type TabRouteProps = RouteProp<TabParamList, keyof TabParamList>;

export type MainStackScreenProps<T extends keyof MainStackParamList> =
  StackScreenProps<MainStackParamList, T>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends MainStackParamList {}
  }
}

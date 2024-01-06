import {RouteProp} from '@react-navigation/native';

export type StackParamList = {
  OnBoarding: undefined;
  TabNavigator: undefined;
};

export type TabParamList = {
  Ledger: undefined;
  Transaction: undefined;
  AddTransaction: undefined;
  Account: undefined;
  Setting: undefined;
};

export type StackScreenName = keyof StackParamList;
export type TabScreenName = keyof TabParamList;

export type TabRouteProps = {
  route: RouteProp<TabParamList, TabScreenName>;
};

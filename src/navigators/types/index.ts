export type StackParamList = {Home: undefined; TabNavigator: undefined};

export type TabParamList = {
  Ledger: undefined;
  Transaction: undefined;
  Account: undefined;
  Setting: undefined;
};

export type StackScreenName = keyof StackParamList;
export type TabScreenName = keyof TabParamList;

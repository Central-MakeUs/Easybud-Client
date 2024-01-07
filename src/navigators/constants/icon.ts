import * as Icons from 'assets/icons';
import {TabScreenName} from 'navigators/types';

export const TabNavigatorIcon: Record<TabScreenName, keyof typeof Icons> = {
  Ledger: 'MoneyOut',
  Transaction: 'GraphBarUp',
  NavigateAddTransaction: 'PlusCircle',
  Account: 'CircleStackUp',
  Setting: 'Setting',
};

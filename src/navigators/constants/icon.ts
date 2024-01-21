import {TabScreenName} from 'navigators/types';
import {KeyOfIcons} from 'types/components/icon';

export const TabNavigatorIcon: Record<TabScreenName, KeyOfIcons> = {
  Ledger: 'MoneyOut',
  Transaction: 'GraphBarUp',
  NavigateCreateTransaction: 'PlusCircle',
  Account: 'CircleStackUp',
  Setting: 'Setting',
};

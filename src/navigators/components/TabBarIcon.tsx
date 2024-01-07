import Icon from 'components/@common/Icon';
import {TabNavigatorIcon} from 'navigators/constants/icon';
import {TabScreenName} from 'navigators/types';

type TabBarIconProps = {
  routeName: TabScreenName;
  focused: boolean;
};

export default function TabBarIcon({routeName, focused}: TabBarIconProps) {
  const iconColor = focused ? 'primary' : 'gray4';

  return <Icon name={TabNavigatorIcon[routeName]} fill={iconColor} size={24} />;
}

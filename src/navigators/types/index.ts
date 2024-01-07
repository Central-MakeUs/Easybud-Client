import {RouteProp} from '@react-navigation/native';
import {StackMenu, TabMenu} from 'navigators/constants/menu';

export type StackParamList = Record<StackMenu, undefined>;

export type TabParamList = Record<TabMenu, undefined>;

export type StackScreenName = keyof StackParamList;
export type TabScreenName = keyof TabParamList;

export type TabRouteProps = {
  route: RouteProp<TabParamList, TabScreenName>;
};

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList, TabParamList} from 'navigators/types';

const useNavigator = () => {
  const stackNavigation = useNavigation<NavigationProp<RootStackParamList>>();
  const tabNavigation = useNavigation<NavigationProp<TabParamList>>();

  return {stackNavigation, tabNavigation};
};

export default useNavigator;

import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TabNavigationProp} from 'navigators/types';
import Typography from 'components/@common/Typography';

export default function LedgerScreen() {
  const navigation = useNavigation<TabNavigationProp>();

  return (
    <View>
      <Typography>거래</Typography>
      <TouchableOpacity>
        <Typography onPress={() => navigation.navigate('Transaction')}>
          상세보기
        </Typography>
      </TouchableOpacity>
    </View>
  );
}

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import useTransaction from 'hooks/useTransaction';

const NullScreen = () => {
  const navigation = useNavigation();

  const {clearTransaction} = useTransaction();

  useFocusEffect(() => {
    clearTransaction();
    navigation.navigate('CreateTransactionStack', {
      screen: 'BasicTransactionInfo',
    });
  });

  return null;
};

export default NullScreen;

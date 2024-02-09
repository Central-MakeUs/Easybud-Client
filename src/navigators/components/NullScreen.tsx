import {useFocusEffect, useNavigation} from '@react-navigation/native';

const NullScreen = () => {
  const navigation = useNavigation();

  useFocusEffect(() => {
    navigation.navigate('CreateTransactionStack', {
      screen: 'BasicTransactionInfo',
    });
  });

  return null;
};

export default NullScreen;

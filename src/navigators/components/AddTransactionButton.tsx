import {useNavigation} from '@react-navigation/native';
import Icon from 'components/@common/Icon';
import {TabNavigatorIcon} from 'navigators/constants/icon';
import React from 'react';
import {TouchableOpacity} from 'react-native';

export default function AddTransactionButton() {
  const navigation = useNavigation();

  const navigateAddTransaction = () =>
    navigation.navigate('AddTransactionStack', {screen: 'BasicTransaction'});

  return (
    <TouchableOpacity onPress={navigateAddTransaction}>
      <Icon name={TabNavigatorIcon.AddTransaction} fill={'primary'} size={44} />
    </TouchableOpacity>
  );
}

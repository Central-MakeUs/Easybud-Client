import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'components/@common/Icon';
import {TabNavigatorIcon} from 'navigators/constants/icon';
import useTransaction from 'hooks/useTransaction';

export default function CreateTransactionButton() {
  const navigation = useNavigation();

  const {clearTransaction} = useTransaction();

  const navigateAddTransaction = () => {
    clearTransaction();
    navigation.navigate('CreateTransactionStack', {
      screen: 'BasicTransactionInfo',
    });
  };

  return (
    <TouchableOpacity onPress={navigateAddTransaction}>
      <Icon
        name={TabNavigatorIcon.NavigateCreateTransaction}
        fill={'primary'}
        size={44}
      />
    </TouchableOpacity>
  );
}

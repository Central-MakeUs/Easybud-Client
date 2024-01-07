import Icon from 'components/@common/Icon';
import {TabNavigatorIcon} from 'navigators/constants/icon';
import React from 'react';
import {TouchableOpacity} from 'react-native';

export default function AddTransactionButton() {
  return (
    <TouchableOpacity>
      <Icon name={TabNavigatorIcon.AddTransaction} fill={'primary'} size={44} />
    </TouchableOpacity>
  );
}

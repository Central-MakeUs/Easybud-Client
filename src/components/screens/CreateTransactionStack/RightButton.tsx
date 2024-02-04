import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  CreateTransactionStackNavigationProp,
  CreateTransactionStackScreenName,
} from 'navigators/types';
import Button from 'components/@common/Buttons/Button';
import useAccount from 'hooks/useAccount';
import {NewTransaction} from 'types/transaction';
import useTransaction from 'hooks/useTransaction';
import {NewAccount} from 'types/account';

type RightButtonProps = {
  transaction?: NewTransaction;
  account?: NewAccount;
  isUpdateStep: boolean | undefined;
  accountIndex: number;
  nextScreen: Exclude<CreateTransactionStackScreenName, 'BasicTransactionInfo'>;
} & TouchableOpacityProps;

export default function RightButton({
  transaction,
  account,
  isUpdateStep = false,
  nextScreen,
  accountIndex,
  ...props
}: RightButtonProps) {
  const navigation = useNavigation<CreateTransactionStackNavigationProp>();

  const {updateTransaction} = useTransaction();
  const {updateAccount} = useAccount({accountIndex});

  const onPress = () => {
    if (account) {
      updateAccount(account);
    }

    if (transaction) {
      updateTransaction(transaction);
    }

    if (isUpdateStep || nextScreen === 'TransactionConfirmation') {
      navigation.navigate('TransactionConfirmation');
    } else {
      navigation.navigate(nextScreen, {accountIndex});
    }
  };

  return (
    <Button {...props} onPress={onPress}>
      {isUpdateStep ? '수정' : '다음'}
    </Button>
  );
}

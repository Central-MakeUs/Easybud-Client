import {useNavigation} from '@react-navigation/native';
import Button from 'components/@common/Buttons/Button';
import {CreateTransactionStackNavigationProp} from 'navigators/types';
import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {NewTransaction} from 'types/transaction';

type LeftButtonProps = {
  isUpdateStep: boolean | undefined;
  transaction: NewTransaction;
} & TouchableOpacityProps;

export default function LeftButton({
  isUpdateStep,
  transaction,
  ...props
}: LeftButtonProps) {
  const navigation = useNavigation<CreateTransactionStackNavigationProp>();

  const onPress = () => {
    isUpdateStep
      ? navigation.navigate('TransactionConfirmation', {transaction})
      : navigation.goBack();
  };
  return (
    <Button {...props} variant="secondary" onPress={onPress}>
      이전
    </Button>
  );
}

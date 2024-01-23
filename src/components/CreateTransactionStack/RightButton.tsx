import {useNavigation} from '@react-navigation/native';
import Button from 'components/@common/Buttons/Button';
import {
  CreateTransactionStackNavigationProp,
  CreateTransactionStackScreenName,
} from 'navigators/types';
import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {NewTransaction} from 'types/transaction';

type RightButtonProps = {
  isUpdateStep: boolean | undefined;
  transaction: NewTransaction;
  nextScreen: Exclude<CreateTransactionStackScreenName, 'BasicTransactionInfo'>;
} & TouchableOpacityProps;

export default function RightButton({
  isUpdateStep = false,
  transaction,
  nextScreen,
  ...props
}: RightButtonProps) {
  const navigation = useNavigation<CreateTransactionStackNavigationProp>();

  const onPress = () => {
    const screen = isUpdateStep ? 'TransactionConfirmation' : nextScreen;

    navigation.navigate(screen, {transaction});
  };

  return (
    <Button {...props} onPress={onPress}>
      {isUpdateStep ? '수정' : '다음'}
    </Button>
  );
}

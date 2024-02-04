import {useNavigation} from '@react-navigation/native';
import Button from 'components/@common/Buttons/Button';
import {CreateTransactionStackNavigationProp} from 'navigators/types';
import React from 'react';
import {TouchableOpacityProps} from 'react-native';

type LeftButtonProps = {
  isUpdateStep: boolean | undefined;
} & TouchableOpacityProps;

export default function LeftButton({isUpdateStep, ...props}: LeftButtonProps) {
  const navigation = useNavigation<CreateTransactionStackNavigationProp>();

  const onPress = () => {
    isUpdateStep
      ? navigation.navigate('TransactionConfirmation')
      : navigation.goBack();
  };
  return (
    <Button {...props} variant="secondary" onPress={onPress}>
      이전
    </Button>
  );
}

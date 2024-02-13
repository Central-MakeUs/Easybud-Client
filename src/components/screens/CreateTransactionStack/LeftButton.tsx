import {useNavigation} from '@react-navigation/native';
import Button from 'components/@common/Buttons/Button';
import {CreateTransactionStackNavigationProp} from 'navigators/types';
import React from 'react';
import {TouchableOpacityProps} from 'react-native';

type LeftButtonProps = {
  isUpdateStep: boolean | undefined;
} & TouchableOpacityProps;

export default function LeftButton({
  isUpdateStep,
  onPress,
  ...props
}: LeftButtonProps) {
  const navigation = useNavigation<CreateTransactionStackNavigationProp>();

  const handlePress = () => {
    isUpdateStep
      ? navigation.navigate('TransactionConfirmation')
      : navigation.goBack();
  };
  return (
    <Button
      {...props}
      variant="secondary"
      onPress={event => {
        onPress && onPress(event);
        handlePress();
      }}>
      이전
    </Button>
  );
}

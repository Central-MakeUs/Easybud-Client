import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  CreateTransactionStackNavigationProp,
  CreateTransactionStackScreenName,
} from 'navigators/types';
import Button from 'components/@common/Buttons/Button';

type RightButtonProps = {
  isUpdateStep: boolean | undefined;
  accountIndex: number;
  nextScreen: Exclude<CreateTransactionStackScreenName, 'BasicTransactionInfo'>;
} & TouchableOpacityProps;

export default function RightButton({
  isUpdateStep = false,
  nextScreen,
  accountIndex,
  ...props
}: RightButtonProps) {
  const navigation = useNavigation<CreateTransactionStackNavigationProp>();

  const onPress = () => {
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

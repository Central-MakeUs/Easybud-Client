import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import Button from 'components/@common/Buttons/Button';

type RightButtonProps = {
  label?: '다음' | '저장' | '수정';
  onPress: () => void;
} & TouchableOpacityProps;

export default function RightButton({
  label = '다음',
  onPress,
}: RightButtonProps) {
  return <Button onPress={onPress}>{label}</Button>;
}

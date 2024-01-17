import Button from 'components/@common/buttons/Button';
import React from 'react';

type NextButtonProps = {onPress: () => void};

export default function NextButton({onPress}: NextButtonProps) {
  return <Button onPress={onPress}>다음</Button>;
}

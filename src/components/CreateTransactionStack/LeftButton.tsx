import Button from 'components/@common/buttons/Button';
import React from 'react';

type LeftButtonProps = {
  label?: '이전';
  onPress: () => void;
};

export default function LeftButton({label = '이전', onPress}: LeftButtonProps) {
  return (
    <Button variant="secondary" onPress={onPress}>
      {label}
    </Button>
  );
}

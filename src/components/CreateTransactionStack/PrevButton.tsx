import Button from 'components/@common/buttons/Button';
import React from 'react';

type PrevButtonProps = {onPress: () => void};

export default function PrevButton({onPress}: PrevButtonProps) {
  return (
    <Button style={{maxWidth: 60}} variant="secondary" onPress={onPress}>
      이전
    </Button>
  );
}

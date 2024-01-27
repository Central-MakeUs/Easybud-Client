import Typography from 'components/@common/Typography';
import React from 'react';
import {TextProps} from 'react-native';

export default function Title(props: TextProps) {
  return (
    <Typography type="Title1Bold" style={{paddingVertical: 20}} {...props} />
  );
}

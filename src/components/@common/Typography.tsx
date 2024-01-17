import {Text, TextProps} from 'react-native';
import {theme} from 'styles';
import {KeyOfPalette, KeyOfTypography} from 'styles/types';

type TypographyProps = {
  type?: KeyOfTypography;
  color?: KeyOfPalette;
} & TextProps;

export default function Typography({
  type = 'Body1Regular',
  color = 'black',
  ...props
}: TypographyProps) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {color: theme.palette[color]},
        theme.typography[type],
      ]}>
      {props.children}
    </Text>
  );
}

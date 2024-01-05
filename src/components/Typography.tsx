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
      style={Object.assign(
        {color: theme.palette[color]},
        props.style ?? {},
        theme.typography[type],
      )}>
      {props.children}
    </Text>
  );
}

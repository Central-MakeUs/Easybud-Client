import {Text, TextProps} from 'react-native';
import {theme} from 'styles';
import {KeyOfTypography} from 'styles/types';

type TypographyProps = {
  type?: KeyOfTypography;
} & TextProps;

export default function Typography({
  type = 'Body1Regular',
  ...props
}: TypographyProps) {
  return (
    <Text
      {...props}
      style={Object.assign(props.style ?? {}, theme.typography[type])}>
      {props.children}
    </Text>
  );
}

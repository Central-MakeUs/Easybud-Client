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
  const words = (props.children as string)?.split(' ');

  return (
    <>
      {words.map((word, index) => (
        <Text
          {...props}
          key={index}
          style={[
            props.style,
            {color: theme.palette[color]},
            theme.typography[type],
          ]}>
          {word}
          {index >= 1 && ' '}
        </Text>
      ))}
    </>
  );
}

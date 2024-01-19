import {Text, TextProps} from 'react-native';
import {theme} from 'styles';
import {KeyOfPalette, KeyOfTypography} from 'styles/types';

/**
 * @param type 종류를 나타냄 (KeyOfTypography 타입 중 가능)
 * @param color text를 변경하는 함수
 */
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
        {flexShrink: 1, flexWrap: 'wrap', color: theme.palette[color]},
        theme.typography[type],
      ]}
    />
  );
}

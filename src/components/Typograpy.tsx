import {Text, TextProps} from 'react-native';

type TypographyProps = {
  type?: TextType;
} & TextProps;

export const enum TextType {
  /** Title1_m - size: 24, weight: 700 */
  Title1Bold,
  /** Title1 - size: 24, weight: 600 */
  Title1Semibold1,
  /** Title1_m: size: 20, weight: 600 */
  Title1Semibold2,
  /** Title2 - size: 16, weight: 700 */
  Title2Bold,
  /** Title2_l - size: 16, weight: 400 */
  Title2Regular,
  /** size: 16, weight: 600 */
  Body1Semibold,
  /** size: 16, weight: 400 */
  Body1Regular,
  /** size: 13, weight: 600 */
  Body2Semibold,
  /** size: 13, weight: 400 */
  Body2Regular,
}

export default function Typography({
  type = TextType.Body1Regular,
  ...props
}: TypographyProps) {
  const customProps: typeof props.style = (() => {
    switch (type) {
      case TextType.Title1Bold:
        return {
          fontWeight: '700',
          fontSize: 24,
          lineHeight: -1.2,
        };

      case TextType.Title1Semibold1:
        return {
          fontWeight: '600',
          fontSize: 24,
        };
      case TextType.Title1Semibold2:
        return {
          fontWeight: '700',
          fontSize: 20,
          lineHeight: 36,
        };
      case TextType.Title2Bold:
        return {
          fontWeight: '700',
          fontSize: 16,
        };
      case TextType.Title2Regular:
        return {
          fontWeight: '400',
          fontSize: 16,
        };
      case TextType.Body1Semibold:
        return {
          fontWeight: '600',
          fontSize: 16,
        };

      case TextType.Body1Regular:
        return {
          fontWeight: '400',
          fontSize: 16,
        };

      case TextType.Body2Semibold:
        return {
          fontWeight: '600',
          fontSize: 13,
        };

      case TextType.Body2Regular:
        return {
          fontWeight: '400',
          fontSize: 13,
        };
    }
  })();

  return (
    <Text {...props} style={Object.assign(props.style ?? {}, customProps)}>
      {props.children}
    </Text>
  );
}

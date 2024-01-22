import {typographyStyles} from 'styles/typography';

/** typeof styles */

export type TypeOfTheme = {
  palette: TypeOfPalette;
  typography: TypeOfTypography;
};

export type TypeOfTypography = typeof typographyStyles;

export type TypeOfPalette = Readonly<{
  primary: string;
  secondary: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  white: string;
  black: string;
  green: string;
  pink: string;
}>;

/** keyof styles */

export type KeyOfTheme = keyof TypeOfPalette;

export type KeyOfPalette = keyof TypeOfPalette;

export type KeyOfTypography = keyof TypeOfTypography;

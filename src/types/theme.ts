import {lightPalette, theme} from 'styles';

export type TypeOfTheme = {
  palette: TypeOfPalette;
};

export type TypeOfPalette = Readonly<{
  primary: string;
  secondary: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  white: string;
  black: string;
}>;

export type KeyOfPalette = keyof typeof lightPalette;

export type KeyofTheme = keyof typeof theme;

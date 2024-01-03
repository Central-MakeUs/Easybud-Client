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

export type KeyOfPalette = keyof TypeOfPalette;

export type KeyofTheme = keyof TypeOfPalette;

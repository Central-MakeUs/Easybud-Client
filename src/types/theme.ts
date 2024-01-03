import {palette, theme} from 'styles';

export type TypeOfTheme = {
  palette: TypeOfPalette;
};

export type TypeOfPalette = typeof palette;

export type KeyOfPalette = keyof typeof palette;

export type KeyofTheme = keyof typeof theme;

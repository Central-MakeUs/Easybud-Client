import {TypeOfPalette} from 'types/theme';

const commonPalette = {
  gray1: '#F9FAFB',
  gray2: '#F2F4F6',
  gray3: '#D3D9DF',
  gray4: '#8B95A1',
  gray5: '#4E5968',
  gray6: '#191F28',
  white: '#ffffff',
  black: '#000000',
};

export const lightPalette: TypeOfPalette = {
  primary: '#5856D6',
  secondary: '#DEDDF7',
  ...commonPalette,
};

export const darkPalette: TypeOfPalette = {
  primary: '#5E5CE6',
  secondary: '#1C1C45',
  ...commonPalette,
};

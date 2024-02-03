import {TypeOfPalette} from 'styles/types';

const commonPalette = {
  gray1: '#F9FAFB',
  gray2: '#F2F4F6',
  gray3: '#D3D9DF',
  gray4: '#8B95A1',
  gray5: '#4E5968',
  gray6: '#191F28',
  gray7: '#eeeeee',
  white: '#ffffff',
  black: '#000000',
  green: '#26A060',
  pink: '#E76587',
  error: '#F38686',
  red: '#E24A59',
  blue: '#3781EA',
};

export const lightPalette: TypeOfPalette = {
  primary: '#0057FF',
  secondary: '#DEDDF7',
  ...commonPalette,
};

export const darkPalette: TypeOfPalette = {
  primary: '#5E5CE6',
  secondary: '#1C1C45',
  ...commonPalette,
};

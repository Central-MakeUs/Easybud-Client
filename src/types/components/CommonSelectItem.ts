import {KeyOfPalette} from 'styles/types';

export type ThemeVariantType = 'primary' | 'gray';

export type ThemeVariantColorObjectType = {
  backgroundColor: string;
  labelTextColor: KeyOfPalette;
  valueTextColor: KeyOfPalette;
  placeholderTextColor: KeyOfPalette;
};

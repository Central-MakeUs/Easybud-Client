import {theme} from 'styles';
import {
  ThemeVariantType,
  ThemeVariantColorObjectType,
} from 'types/CommonSelectItem';

export const ThemeVariants: Record<
  ThemeVariantType,
  ThemeVariantColorObjectType
> = {
  primary: {
    backgroundColor: theme.palette.primary,
    labelTextColor: 'white',
    valueTextColor: 'white',
    placeholderTextColor: 'white',
  },
  gray: {
    backgroundColor: theme.palette.gray2,
    labelTextColor: 'gray6',
    valueTextColor: 'gray6',
    placeholderTextColor: 'gray4',
  },
};

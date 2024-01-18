import {theme} from 'styles';
import {ThemeVariantType, ThemeVariantColorObjectType} from 'types/SelectForm';

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

export const enum CategoryName {
  'primary' = '대분류',
  'secondary' = '중분류',
  'tertiary' = '소분류',
  'quaternary' = '세분류',
}

export const AddCategoryText = ' 항목 추가';

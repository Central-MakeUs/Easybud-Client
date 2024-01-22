import {theme} from 'styles';
import {KeyOfPalette} from 'styles/types';
import {typographyStyles} from 'styles/typography';

export const days = ['일', '월', '화', '수', '목', '금', '토'] as const;

export const calendarTheme = {
  palette: {
    primary: {
      main: theme.palette.primary,
      contrastText: theme.palette.gray5,
    },
  },
  typography: {
    fontFamily: typographyStyles.Body4Regular.fontFamily,
    xs: {
      fontSize: typographyStyles.Body4Regular.fontSize,
      fontWeight: typographyStyles.Body4Regular.fontWeight,
    },
    sm: {
      fontSize: typographyStyles.Body4Semibold.fontSize,
      fontWeight: typographyStyles.Body4Semibold.fontWeight,
    },
  },
} as const;

export const textColor: Record<'수익' | '비용' | '손익', KeyOfPalette> = {
  수익: 'green',
  비용: 'pink',
  손익: 'gray5',
};

import {theme} from 'styles';
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

import {theme} from 'styles';
import {KeyOfPalette} from 'styles/types';
import {typographyStyles} from 'styles/typography';
import {
  IncomeStatusSummaryKeyVariant,
  IncomeStatusSummaryValueVariant,
} from 'types/screens/TransactionScreen';

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

export const incomeStatusSummaryText: Record<
  IncomeStatusSummaryKeyVariant[number],
  IncomeStatusSummaryValueVariant[number]
> = {
  revenue: '수익',
  expense: '비용',
  profitLoss: '손익',
};

export const incomeStatusSummaryTextColor: Record<
  IncomeStatusSummaryKeyVariant[number],
  KeyOfPalette
> = {
  revenue: 'green',
  expense: 'pink',
  profitLoss: 'gray5',
};

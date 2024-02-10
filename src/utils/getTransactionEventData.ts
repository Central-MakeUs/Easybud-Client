import {IncomeStatusSummaryByMonthResponseDto} from 'types/dtos/transaction';
import {formatToLocaleString} from 'utils/formatAmountValue';

export const getTransactionEventData = (
  dataList: IncomeStatusSummaryByMonthResponseDto,
): {title: string; start: Date; end: Date}[] =>
  dataList.map(data => {
    const [yearString, monthString, dayString] = data.date.split('-');
    const year = Number(yearString);
    const month = Number(monthString);
    const day = Number(dayString);

    const profitLoss = formatToLocaleString(data.profitLoss);
    const title = data.profitLoss >= 0 ? `+${profitLoss}` : `-${profitLoss}`;

    return {
      title,
      start: new Date(year, month - 1, day, 0, 0),
      end: new Date(year, month - 1, day, 23, 59),
    };
  });

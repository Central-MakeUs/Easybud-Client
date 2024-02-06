import {GraphDataType, FirstLabelType} from 'types/screens/LedgerScreen';
import {formatToLocaleString} from 'utils/formatAmountValue';

export const getGraphData = (
  revenue: number,
  expense: number,
  revenuePercentage: number,
  expensePercentage: number,
  revenueChangePercentage: number,
  expenseChangePercentage: number,
) => {
  return [
    {
      y: revenuePercentage,
      label: `수익\n${formatToLocaleString(revenue)}원\n전월 대비 ${revenueChangePercentage}%`,
    },
    {
      y: expensePercentage,
      label: `비용\n${formatToLocaleString(expense)}원\n전월 대비 ${expenseChangePercentage}%`,
    },
  ];
};

export const calculateGraphPosition = (
  datum: GraphDataType,
  label1: FirstLabelType,
  x: number,
  y: number,
) => {
  let top, left;
  const incomeCondition = label1 === '수익';

  if (!datum.y) {
    top = incomeCondition ? y + 40 : y + 38;
    left = incomeCondition ? x + 70 : x - 155;
  } else if (datum.y === 100) {
    top = incomeCondition ? y - 113 : y - 100;
    left = incomeCondition ? x + 67 : x - 155;
  } else if (datum.y > 50) {
    top = incomeCondition ? y - 18 : y - 26;
    left = incomeCondition ? x - 10 : x - 79;
  } else {
    top = incomeCondition ? y - 50 : y - 48;
    left = incomeCondition ? x + 6 : x - 83;
  }

  return {top, left};
};

export const formatNumberToLocaleString = (value: string): string => {
  return Number(value).toLocaleString();
};

export const parseNumberFromString = (value: string) => {
  return value.replace(/[^0-9]/g, '');
};

export const formatValue = (value?: string): string => {
  if (!value) return '0원';

  const formattedValue = formatNumberToLocaleString(
    parseNumberFromString(value),
  );

  return `${formattedValue}원`;
};

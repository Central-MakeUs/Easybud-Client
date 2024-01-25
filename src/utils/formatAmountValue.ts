export const formatToLocaleString = <T extends string | number>(
  value: T,
): string => {
  if (typeof value === 'string') {
    return Number(value).toLocaleString();
  }
  return value.toLocaleString();
};

export const parseNumberFromString = (value: string) => {
  return value.replace(/[^0-9]/g, '');
};

export const formatValue = (value?: string): string => {
  if (!value) return '0원';

  const formattedValue = formatToLocaleString(parseNumberFromString(value));

  return `${formattedValue}원`;
};

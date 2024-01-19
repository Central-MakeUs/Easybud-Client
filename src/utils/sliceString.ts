export const sliceString = (text: string, maxLength: number) => {
  return text.length >= maxLength ? `${text.slice(0, maxLength)}...` : text;
};

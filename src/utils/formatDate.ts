export const getFormattedDate = (date: Date | string): string => {
  const dateInstance = date instanceof Date ? date : new Date(date);
  return `${dateInstance.getFullYear()}년 ${dateInstance.getMonth() + 1}월 ${dateInstance.getDate()}일`;
};

export const updateMonth = (prevDate: Date, monthDelta: number) => {
  const newDate = new Date(prevDate);
  newDate.setMonth(newDate.getMonth() + monthDelta);

  if (newDate.getMonth() < 0) {
    newDate.setFullYear(newDate.getFullYear() - 1);
    newDate.setMonth(11);
  } else if (newDate.getMonth() > 11) {
    newDate.setFullYear(newDate.getFullYear() + 1);
    newDate.setMonth(0);
  }

  return newDate;
};

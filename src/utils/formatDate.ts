export const getFormattedDate = (date: Date): string => {
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
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

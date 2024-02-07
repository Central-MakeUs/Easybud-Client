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

export const formatDate = (inputDate: string) => {
  const date = new Date(inputDate);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const formattedDate = `${year}.${month}.${day}`;

  return formattedDate;
};

export const formatDateByDash = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};

export const getDatePeriod = (currentDate: Date) => {
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  const startDate = `${year}-${month}-01`;
  const endDate = `${year}-${month}-${day}`;

  return {startDate, endDate};
};

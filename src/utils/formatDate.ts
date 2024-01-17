export const getFormattedDate = (date: Date): string => {
  const amPm = date.getHours() < 12 ? '오전' : '오후';

  return `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일 ${amPm} ${
    date.getHours() % 12 || 12
  }:${date.getMinutes()}`;
};

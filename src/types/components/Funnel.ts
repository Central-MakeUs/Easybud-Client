export type NonEmptyArray<T> = [T, ...T[]];

export type StepProps<T extends NonEmptyArray<string>> = {
  name: T[number];
  children: React.ReactElement;
};

export type Steps<T extends NonEmptyArray<string>> = {
  [P in T[number]]: React.ReactElement;
};

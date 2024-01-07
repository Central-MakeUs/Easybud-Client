/** common */

export type NonEmptyArray<T> = [T, ...T[]];

export type StepInfo<T extends string> = {
  name: T[number];
  component: React.ReactElement;
};

export type StepProps<T extends NonEmptyArray<string>> = {
  name: T[number];
  children: React.ReactElement;
};

/** onboarding */

export type OnBoardinStep = 'Step1' | 'Step2' | 'Step3';

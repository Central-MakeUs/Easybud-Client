import {NonEmptyArray} from '@types/funnel';

export type StepProps<Steps extends NonEmptyArray<string>> = {
  name: Steps[number];
  children: React.ReactNode;
};

export default function Step<Steps extends NonEmptyArray<string>>({
  children,
}: StepProps<Steps>) {
  return <>{children}</>;
}

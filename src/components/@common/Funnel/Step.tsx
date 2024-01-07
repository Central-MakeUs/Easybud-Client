import {NonEmptyArray, StepProps} from 'types/funnel';

export default function Step<Steps extends NonEmptyArray<string>>({
  children,
}: StepProps<Steps>) {
  return <>{children}</>;
}

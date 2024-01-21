import {NonEmptyArray, StepProps} from 'types/components/Funnel';

/**
 * @param children 자식 요소
 */
export default function Step<Steps extends NonEmptyArray<string>>({
  children,
}: StepProps<Steps>) {
  return <>{children}</>;
}

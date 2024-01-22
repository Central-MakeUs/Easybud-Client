import {Children, ReactElement, isValidElement} from 'react';
import {NonEmptyArray, StepProps} from 'types/components/Funnel';

/**
 * @param steps 전체 스텝 문자열 리스트
 * @param step 현재 스텝을 나타내는 문자열
 * @param children 전체 스텝 컴포넌트 배열
 */
type FunnelProps<Steps extends NonEmptyArray<string>> = {
  steps: Steps;
  step: Steps[number];
  children:
    | Array<ReactElement<StepProps<Steps>>>
    | ReactElement<StepProps<Steps>>;
};

export default function Funnel<Steps extends NonEmptyArray<string>>({
  steps,
  step,
  children,
}: FunnelProps<Steps>) {
  const validChildren = Children.toArray(children)
    .filter(isValidElement)
    .filter(i => steps.includes((i.props as StepProps<Steps>).name)) as Array<
    ReactElement<StepProps<Steps>>
  >;

  const targetStep = validChildren.find(
    (child: ReactElement<StepProps<Steps>>) => child.props.name === step,
  );

  return <>{targetStep}</>;
}

import {Children, ReactElement, isValidElement} from 'react';
import {NonEmptyArray, StepProps} from 'types/funnel';

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

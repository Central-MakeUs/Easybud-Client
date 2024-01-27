import ScreenContainer from 'components/@common/ScreenContainer';
import Title from 'components/CreateTransactionStack/Title';
import React, {ReactNode} from 'react';

type ContainerProps = {
  title: string;
  children: ReactNode;
  fixedBottomComponent?: ReactNode;
};

export default function Container({
  title,
  fixedBottomComponent,
  children,
}: ContainerProps) {
  return (
    <ScreenContainer fixedBottomComponent={fixedBottomComponent}>
      <Title>{title}</Title>
      {children}
    </ScreenContainer>
  );
}

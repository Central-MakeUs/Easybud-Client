import React, {ReactNode} from 'react';
import ScreenContainer from 'components/@common/ScreenContainer';

type CreateTransactionScreenContainerProps = {
  children: ReactNode;
  leftButton?: ReactNode;
  rightButton?: ReactNode;
};

export default function CreateTransactionScreenContainer({
  children,
  leftButton,
  rightButton,
}: CreateTransactionScreenContainerProps) {
  return (
    <ScreenContainer
      fixedBottomComponent={
        <>
          {leftButton}
          {rightButton}
        </>
      }>
      {children}
    </ScreenContainer>
  );
}

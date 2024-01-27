import ProgressStep from 'components/@common/ProgressStep';
import ScreenContainer from 'components/@common/ScreenContainer';
import Title from 'components/CreateTransactionStack/Title';
import {transactionState} from 'libs/recoil/states/transaction';
import {CreateTransactionStackScreenName} from 'navigators/types';
import React, {ReactNode, useMemo} from 'react';
import {useRecoilValue} from 'recoil';

type ContainerProps = {
  title: string;
  children: ReactNode;
  fixedBottomComponent?: ReactNode;
  screen: CreateTransactionStackScreenName;
  accountIndex?: number;
};

export default function Container({
  title,
  fixedBottomComponent,
  children,
  screen,
  accountIndex = -1,
}: ContainerProps) {
  const {accounts} = useRecoilValue(transactionState);

  const step = useMemo(
    () => (accounts.length === 0 ? 1 : accounts.length) * 3 + 2,
    [accounts.length],
  );

  const currentStep = useMemo(() => {
    switch (screen) {
      case 'BasicTransactionInfo':
        return 1;
      case 'AccountType':
        return accountIndex * 3 + 2;
      case 'AccountCategory':
        return accountIndex * 3 + 3;
      case 'AccountAmount':
        return accountIndex * 3 + 4;
      case 'TransactionConfirmation':
        return accounts.length * 3 + 2;
    }
  }, [accountIndex, accounts.length, screen]);

  return (
    <ScreenContainer fixedBottomComponent={fixedBottomComponent}>
      <ProgressStep stepCount={step} currentStep={currentStep} />
      <Title>{title}</Title>
      {children}
    </ScreenContainer>
  );
}

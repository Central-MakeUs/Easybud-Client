import ProgressStep from 'components/@common/ProgressStep';
import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import {transactionState} from 'libs/recoil/states/transaction';
import {CreateTransactionStackScreenName} from 'navigators/types';
import React, {ReactNode, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {useRecoilValue} from 'recoil';

type ContainerProps = {
  header: {
    title: string;
    errorMessage?: ReactNode;
  };
  children: ReactNode;
  fixedBottomComponent?: ReactNode;
  screen: CreateTransactionStackScreenName;
  accountIndex?: number;
};

export default function Container({
  header,
  fixedBottomComponent,
  children,
  screen,
  accountIndex = -1,
}: ContainerProps) {
  const {title, errorMessage} = header;
  const {accounts} = useRecoilValue(transactionState);
  const step = useMemo(() => {
    return (accounts.length === 0 ? 1 : accounts.length) * 3 + 2;
  }, [accounts.length]);
  console.log(
    step,
    accountIndex * 3 + 5,
    (accounts.length === 0 ? 1 : accounts.length) * 3 + 2,
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
      <View style={styles.header}>
        <Typography type="Title1Bold">{title}</Typography>
        <Typography
          type="Body2Semibold"
          style={styles.description}
          color="error">
          {errorMessage}
        </Typography>
      </View>
      {children}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {height: 80, justifyContent: 'center', gap: 5},
  title: {},
  description: {},
});

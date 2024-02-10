import ProgressStep from 'components/@common/ProgressStep';
import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import {CreateTransactionStackScreenName} from 'navigators/types';
import React, {ReactNode, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';

type ContainerProps = {
  header: {
    title: string;
    errorMessage?: ReactNode;
  };
  children: ReactNode;
  fixedBottomComponent?: ReactNode;
  screen: CreateTransactionStackScreenName;
};

export default function Container({
  header,
  fixedBottomComponent,
  children,
  screen,
}: ContainerProps) {
  const {title, errorMessage} = header;

  const currentStep = useMemo(() => {
    switch (screen) {
      case 'BasicTransactionInfo':
        return 1;
      case 'AccountType':
        return 2;
      case 'AccountCategory':
        return 3;
      case 'AccountAmount':
        return 4;
      case 'TransactionConfirmation':
        return 5;
    }
  }, [screen]);

  return (
    <ScreenContainer
      fixedBottomComponent={fixedBottomComponent}
      style={{paddingBottom: 120}}>
      <ProgressStep stepCount={5} currentStep={currentStep} />
      <View style={styles.header}>
        <Typography type="Title1Semibold1">{title}</Typography>
        {errorMessage && (
          <Typography
            type="Body2Semibold"
            style={styles.description}
            color="error">
            {errorMessage}
          </Typography>
        )}
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

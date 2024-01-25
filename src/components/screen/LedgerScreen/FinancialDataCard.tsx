import React, {ReactElement, createContext} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Typography from 'components/@common/Typography';

export function Container({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return <View style={financialDataCardStyles.container}>{children}</View>;
}

export function TopElementContainer({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    <View style={financialDataCardStyles.topLabelContainer}>{children}</View>
  );
}

export function Label({label}: {label: string}) {
  return <Typography type={'Title1Semibold1'}>{label}</Typography>;
}

export function DetailButton({onPress}: {onPress?: () => void}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Typography
        type={'Body2Regular'}
        color={'gray4'}
        style={financialDataCardStyles.button}>
        상세보기
      </Typography>
    </TouchableOpacity>
  );
}

export function BottomElement({bottomElement}: {bottomElement: ReactElement}) {
  return <View>{bottomElement}</View>;
}

type FinancialDataCardContextType = {};

const FinancialDataCardContext = createContext<
  undefined | FinancialDataCardContextType
>(undefined);

export function FinancialDataCard({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    <FinancialDataCardContext.Provider value={{}}>
      {children}
    </FinancialDataCardContext.Provider>
  );
}

export const FinancialDataCardBase = Object.assign(FinancialDataCard, {
  Container,
  TopElementContainer,
  Label,
  DetailButton,
  BottomElement,
});

const financialDataCardStyles = StyleSheet.create({
  container: {
    gap: 20,
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 1,
  },
  topLabelContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    textDecorationLine: 'underline',
  },
});

import React from 'react';
import {FinancialDataCardBase} from 'components/screen/LedgerScreen/FinancialDataCard';
import {StyleSheet, View} from 'react-native';

export default function FinancialStatusOverview() {
  return (
    <FinancialDataCardBase.Container>
      <FinancialDataCardBase.TopElementContainer>
        <FinancialDataCardBase.Label label={'재무상태표'} />
        <FinancialDataCardBase.DetailButton />
      </FinancialDataCardBase.TopElementContainer>
      <FinancialDataCardBase.BottomElement
        bottomElement={
          <View style={financialStatusOverviewStyles.bottomElementContainer} />
        }
      />
    </FinancialDataCardBase.Container>
  );
}

const financialStatusOverviewStyles = StyleSheet.create({
  bottomElementContainer: {
    borderWidth: 1,
  },
});

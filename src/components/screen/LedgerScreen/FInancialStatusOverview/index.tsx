import React from 'react';
import {FinancialDataCardBase} from 'components/screen/LedgerScreen/FinancialDataCard';
import {StyleSheet, View} from 'react-native';
import NetWorthOverview from 'components/screen/LedgerScreen/FInancialStatusOverview/NetWorthOverview';

export default function FinancialStatusOverview() {
  return (
    <FinancialDataCardBase.Container>
      <FinancialDataCardBase.TopElementContainer>
        <FinancialDataCardBase.Label label={'재무상태표'} />
        <FinancialDataCardBase.DetailButton />
      </FinancialDataCardBase.TopElementContainer>
      <FinancialDataCardBase.BottomElement
        bottomElement={
          <View style={financialStatusOverviewStyles.bottomElementContainer}>
            <NetWorthOverview amount={170450000} />
          </View>
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

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {FinancialDataCardBase} from 'components/screen/LedgerScreen/FinancialDataCard';
import FinancialStatusBottomElement from 'components/screen/LedgerScreen/FinancialStatusOverview/FinancialStatusBottomElement';

export default function FinancialStatusOverview() {
  const [hasInitialNetWorth, _] = useState(false);

  return (
    <FinancialDataCardBase.Container>
      <FinancialDataCardBase.TopElementContainer>
        <View style={financialStatusOverviewStyles.topElementFirstColContainer}>
          <FinancialDataCardBase.Label label={'재무상태표'} />
          {!hasInitialNetWorth && <FinancialDataCardBase.TooltipIcon />}
        </View>
        <FinancialDataCardBase.DetailButton />
      </FinancialDataCardBase.TopElementContainer>
      <FinancialDataCardBase.BottomElement
        bottomElement={
          <FinancialStatusBottomElement
            networthAmount={170450000}
            assetAmount={20045000}
            debtAmount={3000000}
          />
        }
      />
    </FinancialDataCardBase.Container>
  );
}

const financialStatusOverviewStyles = StyleSheet.create({
  topElementFirstColContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

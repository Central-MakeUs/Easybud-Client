import React from 'react';
import {FinancialDataCardBase} from 'components/screen/LedgerScreen/FinancialDataCard';
import NetWorthOverview from 'components/screen/LedgerScreen/FinancialStatusOverview/NetWorthOverview';

export default function FinancialStatusOverview() {
  return (
    <FinancialDataCardBase.Container>
      <FinancialDataCardBase.TopElementContainer>
        <FinancialDataCardBase.Label label={'재무상태표'} />
        <FinancialDataCardBase.DetailButton />
      </FinancialDataCardBase.TopElementContainer>
      <FinancialDataCardBase.BottomElement
        bottomElement={
          <NetWorthOverview
            networthAmount={170450000}
            assetAmount={20045000}
            debtAmount={3000000}
          />
        }
      />
    </FinancialDataCardBase.Container>
  );
}

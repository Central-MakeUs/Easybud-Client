import {FinancialDataCardBase} from 'components/screen/LedgerScreen/FinancialDataCard';
import AvailableFundsBottomElement from 'components/screen/LedgerScreen/AvailableFundsOverview/AvailableFundsBottomElement';

export default function AvailableFundsOverview() {
  return (
    <FinancialDataCardBase.Container>
      <FinancialDataCardBase.TopElementContainer>
        <FinancialDataCardBase.Label label={'가용자금'} />
        <FinancialDataCardBase.DetailButton />
      </FinancialDataCardBase.TopElementContainer>
      <FinancialDataCardBase.BottomElement
        children={
          <AvailableFundsBottomElement
            availableFunds={1600000}
            cash={1000000000}
            savingsAccount={1000000000}
            plannedExpenditure={111111112}
          />
        }
      />
    </FinancialDataCardBase.Container>
  );
}

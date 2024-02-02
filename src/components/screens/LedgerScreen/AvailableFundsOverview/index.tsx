import {useGetAvailableFundsDataQuery} from 'hooks/queries/LedgerScreen/useGetAvailableFundsDataQuery';
import {FinancialDataCardBase} from 'components/screens/LedgerScreen/FinancialDataCard';
import AvailableFundsBottomElement from 'components/screens/LedgerScreen/AvailableFundsOverview/AvailableFundsBottomElement';

export default function AvailableFundsOverview() {
  const {cash, ordinaryDeposits, scheduledDisbursements, availableFunds} =
    useGetAvailableFundsDataQuery();

  return (
    <FinancialDataCardBase.Container>
      <FinancialDataCardBase.TopElementContainer>
        <FinancialDataCardBase.Label label={'가용자금'} />
        <FinancialDataCardBase.DetailButton />
      </FinancialDataCardBase.TopElementContainer>
      <FinancialDataCardBase.BottomElement
        children={
          <AvailableFundsBottomElement
            availableFunds={availableFunds}
            cash={cash}
            savingsAccount={ordinaryDeposits}
            plannedExpenditure={scheduledDisbursements}
          />
        }
      />
    </FinancialDataCardBase.Container>
  );
}

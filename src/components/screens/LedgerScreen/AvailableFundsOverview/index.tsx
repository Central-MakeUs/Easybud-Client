import {useGetAvailableFundsDataQuery} from 'hooks/queries/useGetAvailableFundsDataQuery';
import {FinancialDataCardBase} from 'components/screens/LedgerScreen/FinancialDataCard';
import AvailableFundsBottomElement from 'components/screens/LedgerScreen/AvailableFundsOverview/AvailableFundsBottomElement';

export default function AvailableFundsOverview() {
  const availableFundsData = useGetAvailableFundsDataQuery();

  return (
    <FinancialDataCardBase.Container>
      <FinancialDataCardBase.TopElementContainer>
        <FinancialDataCardBase.Label label={'가용자금'} />
        <FinancialDataCardBase.DetailButton />
      </FinancialDataCardBase.TopElementContainer>
      <FinancialDataCardBase.BottomElement
        children={
          <AvailableFundsBottomElement
            availableFunds={availableFundsData.availableFunds}
            cash={availableFundsData.cash}
            savingsAccount={availableFundsData.ordinaryDeposits}
            plannedExpenditure={availableFundsData.scheduledDisbursements}
          />
        }
      />
    </FinancialDataCardBase.Container>
  );
}

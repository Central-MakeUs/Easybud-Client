import {useQuery} from '@tanstack/react-query';
import {ledgerApi} from 'apis/ledgerApi';
import {FinancialDataCardBase} from 'components/screens/LedgerScreen/FinancialDataCard';
import AvailableFundsBottomElement from 'components/screens/LedgerScreen/AvailableFundsOverview/AvailableFundsBottomElement';

export default function AvailableFundsOverview() {
  const {
    data: availableFundsData = {
      cash: 0,
      ordinaryDeposits: 0,
      scheduledDisbursements: 0,
      availableFunds: 0,
    },
  } = useQuery({
    queryKey: ['availableFundsData'],
    queryFn: ledgerApi.getAvailableFundsData,
  });

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

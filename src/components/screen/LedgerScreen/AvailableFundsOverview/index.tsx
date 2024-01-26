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
          <AvailableFundsBottomElement availableFundsAmount={1600000} />
        }
      />
    </FinancialDataCardBase.Container>
  );
}

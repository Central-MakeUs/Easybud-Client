import {FinancialDataCardBase} from 'components/screen/LedgerScreen/FinancialDataCard';
import IncomeStatementBottomElement from 'components/screen/LedgerScreen/IncomeStatementOverview/IncomeStatementBottomElement';

export default function IncomeStatementOverview() {
  return (
    <FinancialDataCardBase.Container>
      <FinancialDataCardBase.TopElementContainer>
        <FinancialDataCardBase.Label label={'손익계산서'} />
        <FinancialDataCardBase.DetailButton />
      </FinancialDataCardBase.TopElementContainer>
      <FinancialDataCardBase.BottomElement
        children={<IncomeStatementBottomElement />}
      />
    </FinancialDataCardBase.Container>
  );
}

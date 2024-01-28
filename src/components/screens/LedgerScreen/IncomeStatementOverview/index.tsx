import {FinancialDataCardBase} from 'components/screens/LedgerScreen/FinancialDataCard';
import IncomeStatementBottomElement from 'components/screens/LedgerScreen/IncomeStatementOverview/IncomeStatementBottomElement';

export default function IncomeStatementOverview() {
  return (
    <FinancialDataCardBase.Container>
      <FinancialDataCardBase.TopElementContainer>
        <FinancialDataCardBase.Label label={'손익현황'} />
        <FinancialDataCardBase.DetailButton variant={'time'} />
      </FinancialDataCardBase.TopElementContainer>
      <FinancialDataCardBase.BottomElement
        children={<IncomeStatementBottomElement />}
      />
    </FinancialDataCardBase.Container>
  );
}

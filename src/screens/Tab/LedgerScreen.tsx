import FinancialDataCard from 'components/screen/LedgerScreen/FinancialDataCard';
import ScreenContainer from 'components/@common/ScreenContainer';
import Transaction from 'components/@common/Transaction';

export default function LedgerScreen() {
  return (
    <ScreenContainer>
      <FinancialDataCard
        label={'최근 거래'}
        bottomElement={
          <>
            <Transaction
              category={'profit'}
              keyNote={''}
              date={''}
              debitList={[]}
              creditList={[]}
            />
            <Transaction
              category={'profit'}
              keyNote={''}
              date={''}
              debitList={[]}
              creditList={[]}
            />
            <Transaction
              category={'profit'}
              keyNote={''}
              date={''}
              debitList={[]}
              creditList={[]}
            />
          </>
        }
      />
    </ScreenContainer>
  );
}

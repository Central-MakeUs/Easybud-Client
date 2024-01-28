import RecentTransactionOverview from 'components/screens/LedgerScreen/RecentTransactionOverview';
import AvailableFundsOverview from 'components/screens/LedgerScreen/AvailableFundsOverview';
import IncomeStatementOverview from 'components/screens/LedgerScreen/IncomeStatementOverview';
import FinancialStatusOverview from 'components/screens/LedgerScreen/FInancialStatusOverview';
import ScreenContainer from 'components/@common/ScreenContainer';
import Divider from 'components/@common/Divider';

export default function LedgerScreen() {
  return (
    <ScreenContainer
      contentContainerStyle={ledgerScreenStyles.contentContainer}>
      <RecentTransactionOverview />
      <Divider style={ledgerScreenStyles.divider} />
      <AvailableFundsOverview />
      <Divider style={ledgerScreenStyles.divider} />
      <FinancialStatusOverview />
      <Divider style={ledgerScreenStyles.divider} />
      <IncomeStatementOverview />
    </ScreenContainer>
  );
}

const ledgerScreenStyles = {
  contentContainer: {
    paddingHorizontal: 0,
  },
  divider: {
    marginVertical: 20,
  },
};

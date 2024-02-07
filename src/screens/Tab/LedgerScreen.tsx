import RecentTransactionOverview from 'components/screens/LedgerScreen/RecentTransactionOverview';
import AvailableFundsOverview from 'components/screens/LedgerScreen/AvailableFundsOverview';
import IncomeStatusOverview from 'components/screens/LedgerScreen/IncomeStatusOverview';
import FinancialStatusOverview from 'components/screens/LedgerScreen/FinancialStatusOverview';
import ScreenContainer from 'components/@common/ScreenContainer';
import Divider from 'components/@common/Divider';

export default function LedgerScreen() {
  return (
    <ScreenContainer
      contentContainerStyle={ledgerScreenStyles.contentContainer}>
      <RecentTransactionOverview />
      <Divider color="gray2" style={ledgerScreenStyles.divider} />
      <AvailableFundsOverview />
      <Divider color="gray2" style={ledgerScreenStyles.divider} />
      <FinancialStatusOverview />
      <Divider color="gray2" style={ledgerScreenStyles.divider} />
      <IncomeStatusOverview />
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

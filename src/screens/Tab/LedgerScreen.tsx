import RecentTransactionOverview from 'components/screen/LedgerScreen/RecentTransactionOverview';
import FinancialStatusOverview from 'components/screen/LedgerScreen/FinancialStatusOverview';
import AvailableFundsOverview from 'components/screen/LedgerScreen/AvailableFundsOverview';
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

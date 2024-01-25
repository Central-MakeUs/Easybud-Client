import ScreenContainer from 'components/@common/ScreenContainer';
import RecentTransactionOverview from 'components/screen/LedgerScreen/RecentTransactionOverview';
import Divider from 'components/@common/Divider';
import FinancialStatusOverview from 'components/screen/LedgerScreen/FinancialStatusOverview';

export default function LedgerScreen() {
  return (
    <ScreenContainer
      contentContainerStyle={ledgerScreenStyles.contentContainer}>
      <RecentTransactionOverview />
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

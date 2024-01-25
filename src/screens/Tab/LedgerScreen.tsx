import ScreenContainer from 'components/@common/ScreenContainer';
import RecentTransaction from 'components/screen/LedgerScreen/RecentTransaction';
import Divider from 'components/@common/Divider';

export default function LedgerScreen() {
  return (
    <ScreenContainer
      contentContainerStyle={ledgerScreenStyles.contentContainer}>
      <RecentTransaction />
      <Divider style={ledgerScreenStyles.divider} />
    </ScreenContainer>
  );
}

const ledgerScreenStyles = {
  contentContainer: {
    paddingHorizontal: 0,
  },
  divider: {
    marginVertical: 15,
  },
};

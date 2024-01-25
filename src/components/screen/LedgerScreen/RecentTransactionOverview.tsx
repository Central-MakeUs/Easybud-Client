import {useNavigation} from '@react-navigation/native';
import {TabNavigationProp} from 'navigators/types';
import {FinancialDataCardBase} from 'components/screen/LedgerScreen/FinancialDataCard';
import RecentTransactionBottomElement from 'components/screen/LedgerScreen/RecentTransactionOverviewBottomElement';

export default function RecentTransactionOverview() {
  const navigation = useNavigation<TabNavigationProp>();

  const handlePressDetailButton = () => navigation.navigate('Transaction');

  return (
    <FinancialDataCardBase.Container>
      <FinancialDataCardBase.TopElementContainer>
        <FinancialDataCardBase.Label label={'최근 거래'} />
        <FinancialDataCardBase.DetailButton onPress={handlePressDetailButton} />
      </FinancialDataCardBase.TopElementContainer>
      <FinancialDataCardBase.BottomElement
        bottomElement={<RecentTransactionBottomElement />}
      />
    </FinancialDataCardBase.Container>
  );
}

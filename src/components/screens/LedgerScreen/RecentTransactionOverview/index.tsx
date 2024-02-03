import {useNavigation} from '@react-navigation/native';
import {TabNavigationProp} from 'navigators/types';
import {useGetRecentTransactionQuery} from 'hooks/queries/LedgerScreen/useGetRecentTransactionQuery';
import {FinancialDataCardBase} from 'components/screens/LedgerScreen/FinancialDataCard';
import TransactionList from 'components/@common/TransactionList';

export default function RecentTransactionOverview() {
  const navigation = useNavigation<TabNavigationProp>();

  const recentTransactionList = useGetRecentTransactionQuery();

  const handlePressDetailButton = () => navigation.navigate('Transaction');

  return (
    <FinancialDataCardBase.Container>
      <FinancialDataCardBase.TopElementContainer>
        <FinancialDataCardBase.Label label={'최근 거래'} />
        <FinancialDataCardBase.DetailButton onPress={handlePressDetailButton} />
      </FinancialDataCardBase.TopElementContainer>
      <FinancialDataCardBase.BottomElement
        children={
          <TransactionList
            variant={'recent'}
            transactionList={recentTransactionList}
          />
        }
      />
    </FinancialDataCardBase.Container>
  );
}

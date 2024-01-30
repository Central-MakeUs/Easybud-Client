import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {ledgerApi} from 'apis/ledgerApi';
import {TabNavigationProp} from 'navigators/types';
import {FinancialDataCardBase} from 'components/screens/LedgerScreen/FinancialDataCard';
import TransactionList from 'components/@common/TransactionList';

export default function RecentTransactionOverview() {
  const navigation = useNavigation<TabNavigationProp>();

  const handlePressDetailButton = () => navigation.navigate('Transaction');

  const {data: recentTransactionList = []} = useQuery({
    queryKey: ['recentTransactionList'],
    queryFn: ledgerApi.getRecentTransactions,
  });

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

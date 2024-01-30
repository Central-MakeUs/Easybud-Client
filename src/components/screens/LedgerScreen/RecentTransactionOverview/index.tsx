import {useNavigation} from '@react-navigation/native';
import {TabNavigationProp} from 'navigators/types';
import {FinancialDataCardBase} from 'components/screens/LedgerScreen/FinancialDataCard';
import TransactionList from 'components/@common/TransactionList';
import {useGetRecentTransactionQuery} from 'hooks/queries/useGetRecentTransactionQuery';

export default function RecentTransactionOverview() {
  const navigation = useNavigation<TabNavigationProp>();

  const handlePressDetailButton = () => navigation.navigate('Transaction');

  const recentTransactionList = useGetRecentTransactionQuery();

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

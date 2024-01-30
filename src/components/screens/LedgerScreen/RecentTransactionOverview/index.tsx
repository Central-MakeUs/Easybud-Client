import {useNavigation} from '@react-navigation/native';
// import {useQuery} from '@tanstack/react-query';
// import {ledgerApi} from 'apis/LedgerApi';
import {TabNavigationProp} from 'navigators/types';
import {FinancialDataCardBase} from 'components/screens/LedgerScreen/FinancialDataCard';
import TransactionList from 'components/@common/TransactionList';

const mockRecentTransactionList = [
  {
    transactionId: 15,
    date: '2024-01-30T16:06:39.261Z',
    summary: '스타벅스',
    type: 'EXPENSE_TRANSACTION',
    accounts: {
      accountId: 1,
      accountType: {
        typeName: 'ASSET',
        typeState: 'INCREASE',
      },
      primaryCategoryId: 6,
      primaryCategoryContent: '비용',
      secondaryCategoryId: 18,
      secondaryCategoryContent: '생활비',
      tertiaryCategoryId: 47,
      tertiaryCategoryContent: '카페/간식',
      amount: 1234500,
    },
  },
  {
    transactionId: 15,
    date: '2024-01-30T16:06:39.261Z',
    summary: '스타벅스',
    type: 'REVENUE_TRANSACTION',
    accounts: {
      accountId: 1,
      accountType: {
        typeName: 'ASSET',
        typeState: 'INCREASE',
      },
      primaryCategoryId: 6,
      primaryCategoryContent: '비용',
      secondaryCategoryId: 18,
      secondaryCategoryContent: '생활비',
      tertiaryCategoryId: 47,
      tertiaryCategoryContent: '카페/간식',
      amount: 12000,
    },
  },
  {
    transactionId: 15,
    date: '2024-01-30T16:06:39.261Z',
    summary: '스타벅스',
    type: 'ACCOUNT_TRANSFER',
    accounts: {
      accountId: 1,
      accountType: {
        typeName: 'ASSET',
        typeState: 'INCREASE',
      },
      primaryCategoryId: 6,
      primaryCategoryContent: '비용',
      secondaryCategoryId: 18,
      secondaryCategoryContent: '생활비',
      tertiaryCategoryId: 47,
      tertiaryCategoryContent: '카페/간식',
      amount: 12002140,
    },
  },
];

export default function RecentTransactionOverview() {
  const navigation = useNavigation<TabNavigationProp>();

  const handlePressDetailButton = () => navigation.navigate('Transaction');

  // const {data: recentTransactionList = []} = useQuery({
  //   queryKey: ['recentTransactionList'],
  //   queryFn: ledgerApi.getRecentTransactions,
  // });

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
            transactionList={mockRecentTransactionList}
          />
        }
      />
    </FinancialDataCardBase.Container>
  );
}

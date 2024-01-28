import {useNavigation} from '@react-navigation/native';
import {TabNavigationProp} from 'navigators/types';
import {TransactionDataType} from 'types/screens/TransactionScreen';
import {FinancialDataCardBase} from 'components/screen/LedgerScreen/FinancialDataCard';
import TransactionList from 'components/@common/TransactionList';

const dummyTransactionDatas: TransactionDataType<'recent'>[] = [
  {
    category: 'cost',
    keyNote: '쿠팡',
    date: '2023.04.21',
    amount: 23420,
  },
  {
    category: 'cost',
    keyNote: '쿠팡',
    date: '2023.04.21',
    amount: 12323420,
  },
  {
    category: 'cost',
    keyNote: '쿠팡',
    date: '2023.04.21',
    amount: 4323420,
  },
];

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
        children={
          <TransactionList
            variant={'recent'}
            transactionList={dummyTransactionDatas}
          />
        }
      />
    </FinancialDataCardBase.Container>
  );
}

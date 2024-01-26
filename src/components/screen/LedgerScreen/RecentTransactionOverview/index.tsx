import {useNavigation} from '@react-navigation/native';
import {TabNavigationProp} from 'navigators/types';
import {dummyTransactionDatas} from 'screens/Tab/TransactionScreen';
import {FinancialDataCardBase} from 'components/screen/LedgerScreen/FinancialDataCard';
import TransactionList from 'components/@common/TransactionList';

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

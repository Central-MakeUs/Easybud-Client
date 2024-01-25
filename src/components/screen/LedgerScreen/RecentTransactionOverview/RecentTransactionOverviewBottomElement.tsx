import {dummyTransactionDatas} from 'screens/Tab/TransactionScreen';
import TransactionList from 'components/@common/TransactionList';

export default function RecentTransactionOverviewBottomElement() {
  return (
    <TransactionList
      variant={'recent'}
      transactionList={dummyTransactionDatas}
    />
  );
}

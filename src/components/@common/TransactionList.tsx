import {StyleSheet, View} from 'react-native';
import {TransactionListVariant} from 'types/screens/LedgerScreen';
import {formatDate} from 'utils/formatDate';
import Transaction from 'components/@common/Transaction';
import {RecentTransactionType} from 'types/dtos/Ledger';

/**
 * @param transactionList 거래 데이터 배열
 * @param variant 최근 거래 리스트인지 기본 거래 리스트인지 여부
 * @param amount 최근 거래 리스트에서 보여줄 금액
 */
export type TransactionListType = {
  transactionList: RecentTransactionType[];
  variant?: TransactionListVariant;
};

export default function TransactionList({
  transactionList,
  variant = 'default',
}: TransactionListType) {
  return (
    <View style={transactionListStyles.transactionContainer}>
      {transactionList.map((transactionData, index) => (
        <Transaction
          key={index}
          showAll={variant === 'default'}
          category={transactionData.type}
          keyNote={transactionData.summary}
          date={formatDate(transactionData.date)}
          amount={transactionData.accounts.amount}
          debitList={[]}
          creditList={[]}
        />
      ))}
    </View>
  );
}

const transactionListStyles = StyleSheet.create({
  transactionContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 25,
  },
});

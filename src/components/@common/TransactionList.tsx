import {StyleSheet, View} from 'react-native';
import {TransactionDataType} from 'types/screens/TransactionScreen';
import {TransactionListVariant} from 'types/screens/LedgerScreen';
import Transaction from 'components/@common/Transaction';

/**
 * @param transactionList 거래 데이터 배열
 * @param variant 최근 거래 리스트인지 기본 거래 리스트인지 여부
 * @param amount 최근 거래 리스트에서 보여줄 금액
 */
export type TransactionListType<T extends TransactionListVariant> = {
  transactionList: TransactionDataType<T>[];
  variant?: T;
};

export default function TransactionList({
  transactionList,
  variant = 'default',
}: TransactionListType<TransactionListVariant>) {
  return (
    <View style={transactionListStyles.transactionContainer}>
      {transactionList.map((transactionData, index) => (
        <Transaction
          key={index}
          showAll={variant === 'default'}
          category={transactionData.category}
          keyNote={transactionData.keyNote}
          date={transactionData.date}
          amount={transactionData.amount}
          debitList={transactionData.debitList!}
          creditList={transactionData.creditList!}
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

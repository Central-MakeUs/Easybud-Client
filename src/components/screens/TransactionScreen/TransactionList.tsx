import {StyleSheet, View} from 'react-native';
import {TransactionDataType} from 'types/screens/TransactionScreen';
import Transaction from 'components/@common/Transaction';

const dummyTransactionDatas: TransactionDataType = [
  {
    category: 'cost',
    keyNote: '쿠팡',
    date: '2023.04.21',
    debitList: [
      {
        name: '현금',
        amount: '100,000원',
      },
      {
        name: '카카오페이',
        amount: '200,000원',
      },
      {
        name: '카카오페이',
        amount: '100,000원',
      },
    ],
    creditList: [
      {
        name: '미수금',
        amount: '100,000원',
      },
    ],
  },
  {
    category: 'cost',
    keyNote: '쿠팡',
    date: '2023.04.21',
    debitList: [
      {
        name: '현금',
        amount: '100,000원',
      },
      {
        name: '카카오페이',
        amount: '200,000원',
      },
      {
        name: '카카오페이',
        amount: '100,000원',
      },
    ],
    creditList: [
      {
        name: '미수금',
        amount: '100,000원',
      },
    ],
  },
];

export default function TransactionList() {
  return (
    <View style={transactionListStyles.transactionContainer}>
      {dummyTransactionDatas.map((transactionData, index) => (
        <Transaction
          key={index}
          category={transactionData.category}
          keyNote={transactionData.keyNote}
          date={transactionData.date}
          debitList={transactionData.debitList}
          creditList={transactionData.creditList}
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

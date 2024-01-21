import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import 'dayjs/locale/ko';
import {theme} from 'styles';
import {
  DebitCreditType,
  TransactionCategoryType,
} from 'types/components/Transaction';
import Transaction from 'components/@common/Transaction';
import ScreenContainer from 'components/@common/ScreenContainer';
import MonthHeader from 'components/TransactionScreen/MonthHeader';
import FinancialOverview from 'components/TransactionScreen/FinancialOverview';
import FinancialCalendar from 'components/TransactionScreen/FinancialCalendar';

const dummyTransactionDatas: Array<{
  category: TransactionCategoryType;
  keyNote: string;
  date: string;
  debitList: DebitCreditType[];
  creditList: DebitCreditType[];
}> = [
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

export default function TransactionScreen() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <ScreenContainer contentContainerStyle={{paddingTop: 0}}>
      <MonthHeader currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <FinancialOverview />
      <FinancialCalendar currentDate={currentDate} />
      <View style={transactionScreenStyles.divider} />
      <View style={transactionScreenStyles.transactionContainer}>
        {dummyTransactionDatas.map(transactionData => (
          <Transaction
            category={transactionData.category}
            keyNote={transactionData.keyNote}
            date={transactionData.date}
            debitList={transactionData.debitList}
            creditList={transactionData.creditList}
          />
        ))}
      </View>
    </ScreenContainer>
  );
}

const transactionScreenStyles = StyleSheet.create({
  divider: {
    borderWidth: 1,
    borderColor: theme.palette.gray2,
    marginVertical: 15,
  },
  transactionContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 25,
  },
});

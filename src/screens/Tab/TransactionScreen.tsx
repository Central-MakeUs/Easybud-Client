import {useCallback, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import 'dayjs/locale/ko';
import {theme} from 'styles';
import {TransactionDataType} from 'types/screens/TransactionScreen';
import FinancialCalendar from 'components/screen/TransactionScreen/FinancialCalendar';
import FinancialOverview from 'components/screen/TransactionScreen/FinancialOverview';
import MonthHeader from 'components/screen/TransactionScreen/MonthHeader';
import ScreenContainer from 'components/@common/ScreenContainer';
import TransactionList from 'components/@common/TransactionList';
import MonthHeader from 'components/screens/TransactionScreen/MonthHeader';

export const dummyTransactionDatas: TransactionDataType<'default'>[] = [
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

  useFocusEffect(
    useCallback(() => {
      setCurrentDate(new Date());
    }, []),
  );

  return (
    <ScreenContainer
      contentContainerStyle={transactionScreenStyles.contentContainer}>
      <MonthHeader currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <FinancialOverview />
      <FinancialCalendar currentDate={currentDate} />
      <View style={transactionScreenStyles.divider} />
      <TransactionList transactionList={dummyTransactionDatas} />
    </ScreenContainer>
  );
}

const transactionScreenStyles = StyleSheet.create({
  contentContainer: {
    paddingTop: 0,
  },
  divider: {
    borderWidth: 1,
    borderColor: theme.palette.gray2,
    marginVertical: 15,
  },
});

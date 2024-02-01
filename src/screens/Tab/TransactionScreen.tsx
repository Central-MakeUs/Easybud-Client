import {useCallback, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import 'dayjs/locale/ko';
import {theme} from 'styles';
import {TransactionResponseDto} from 'types/dtos/ledger';
import FinancialCalendar from 'components/screens/TransactionScreen/FinancialCalendar';
import FinancialOverview from 'components/screens/TransactionScreen/FinancialOverview';
import MonthHeader from 'components/screens/TransactionScreen/MonthHeader';
import ScreenContainer from 'components/@common/ScreenContainer';
import TransactionList from 'components/@common/TransactionList';

export const dummyTransactionDatas: TransactionResponseDto[] = [
  {
    transactionId: 15,
    date: '2024-01-31T14:30:11.086Z',
    summary: '스타벅스',
    type: 'EXPENSE_TRANSACTION',
    accounts: [
      {
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
    ],
  },
  {
    transactionId: 15,
    date: '2024-01-31T15:30:11.086Z',
    summary: '스타벅스',
    type: 'EXPENSE_TRANSACTION',
    accounts: [
      {
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
    ],
  },
  {
    transactionId: 15,
    date: '2024-01-31T17:30:11.086Z',
    summary: '스타벅스',
    type: 'EXPENSE_TRANSACTION',
    accounts: [
      {
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

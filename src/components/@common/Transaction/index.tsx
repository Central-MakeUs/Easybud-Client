import {StyleSheet, View} from 'react-native';
import {
  DebitCreditType,
  TransactionCategoryType,
} from 'types/components/Transaction';
import DebitCreditList from 'components/@common/Transaction/DebitCreditList';
import TransactionSummary from 'components/@common/Transaction/TransactionSummary';

/**
 * @param category 카테고리 'profit'(수익) | 'cost'(비용) | 'account'(계정)
 * @param keyNote 적요
 * @param date 날짜 (형식: 2023.02.21)
 * @param debitList 차변 리스트
 * @param creditList 대변 리스트
 * @param showAll 거래 전체를 보여줄 것인지 요약만 보여줄 것인지 여부
 */
export type TransactionProps = {
  category: TransactionCategoryType;
  keyNote: string;
  date: string;
  debitList: DebitCreditType[];
  creditList: DebitCreditType[];
  showAll?: boolean;
};

export default function Transaction({
  category,
  keyNote,
  date,
  debitList,
  creditList,
  showAll = true,
}: TransactionProps) {
  return (
    <View style={transactionStyles.container}>
      <TransactionSummary category={category} keyNote={keyNote} date={date} />
      {showAll && (
        <DebitCreditList debitList={debitList} creditList={creditList} />
      )}
    </View>
  );
}

const transactionStyles = StyleSheet.create({
  container: {display: 'flex', flexDirection: 'column', gap: 15},
});

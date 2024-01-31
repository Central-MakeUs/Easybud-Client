import {StyleSheet, View} from 'react-native';
import {TransactionListVariant} from 'types/screens/LedgerScreen';
import {formatDate} from 'utils/formatDate';
import Transaction from 'components/@common/Transaction';
import {TransactionDto} from 'types/dtos/ledger';
import Typography from 'components/@common/Typography';

/**
 * @param transactionList 거래 데이터 배열
 * @param variant 최근 거래 리스트인지 기본 거래 리스트인지 여부
 * @param amount 최근 거래 리스트에서 보여줄 금액
 */
export type TransactionListType = {
  transactionList: TransactionDto[];
  variant?: TransactionListVariant;
};

export default function TransactionList({
  transactionList,
  variant = 'default',
}: TransactionListType) {
  return (
    <View style={transactionListStyles.transactionContainer}>
      {transactionList.length ? (
        transactionList.map((transactionData, index) => (
          <Transaction
            key={index}
            showAll={variant === 'default'}
            category={transactionData.type}
            keyNote={transactionData.summary}
            date={formatDate(transactionData.date)}
            amount={transactionData.accounts[0].amount}
            debitList={[]}
            creditList={[]}
          />
        ))
      ) : (
        <View style={transactionListStyles.noTransactionTextContainer}>
          <Typography type={'Body1Semibold'} color={'gray6'}>
            최근 거래가 없습니다.
          </Typography>
          <Typography type={'Body1Semibold'} color={'gray6'}>
            거래 추가 후 다시 확인해주세요.
          </Typography>
        </View>
      )}
    </View>
  );
}

const transactionListStyles = StyleSheet.create({
  transactionContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 25,
  },
  noTransactionTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
});

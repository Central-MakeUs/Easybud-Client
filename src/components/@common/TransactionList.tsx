import {StyleSheet, View} from 'react-native';
import {TransactionListVariant} from 'types/screens/LedgerScreen';
import {TransactionResponseDto} from 'types/dtos/ledger';
import {DebitCreditEntity} from 'types/entities/ledger';
import {formatDate} from 'utils/formatDate';
import Transaction from 'components/@common/Transaction';
import Typography from 'components/@common/Typography';

/**
 * @param transactionList 거래 데이터 배열
 * @param variant 최근 거래 리스트인지 기본 거래 리스트인지 여부
 */
export type TransactionListType<T extends TransactionListVariant> = {
  transactionList: TransactionResponseDto[];
  variant?: T;
  currentDate?: T extends 'default' ? Date : undefined;
};

export default function TransactionList<T extends TransactionListVariant>({
  transactionList,
  variant,
  currentDate,
}: TransactionListType<T>) {
  const getAmount = (debitAccounts: DebitCreditEntity[]) => {
    let amount = 0;

    debitAccounts.forEach(debitAccount => (amount += debitAccount.amount));

    return amount;
  };

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
            amount={
              variant === 'recent'
                ? getAmount(transactionData.debitAccounts)
                : undefined
            }
            debitList={transactionData.debitAccounts}
            creditList={transactionData.creditAccounts}
          />
        ))
      ) : variant === 'recent' ? (
        <View style={transactionListStyles.noTransactionTextContainer}>
          <Typography type={'Body1Semibold'} color={'gray6'}>
            최근 거래가 없습니다.
          </Typography>
          <Typography type={'Body1Semibold'} color={'gray6'}>
            거래 추가 후 다시 확인해주세요.
          </Typography>
        </View>
      ) : (
        <View style={transactionListStyles.noTransactionTextContainer}>
          <Typography type={'Body1Semibold'} color={'gray6'}>
            {new Date(currentDate!).getMonth() + 1}월{' '}
            {new Date(currentDate!).getDate()}일에는 거래가 없습니다.
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

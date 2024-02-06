import {StyleSheet, View} from 'react-native';
import {theme} from 'styles';
import {formatToLocaleString} from 'utils/formatAmountValue';
import {categoryList} from 'constants/components/Transaction';
import {RecentTransactionVariantType} from 'types/components/Transaction';
import Typography from 'components/@common/Typography';
import {TransactionProps} from 'components/@common/Transaction';

/**
 * @param category 카테고리 'profit'(수익) | 'cost'(비용) | 'account'(계정)
 * @param keyNote 적요
 * @param date 날짜 (형식: 2023.02.21)
 * @param amount 금액
 */
type TransactionSummaryProps = {
  category: TransactionProps['category'];
  keyNote: TransactionProps['keyNote'];
  date: TransactionProps['date'];
  amount?: TransactionProps['amount'];
};

export default function TransactionSummary({
  category,
  keyNote,
  date,
  amount,
}: TransactionSummaryProps) {
  return (
    <View style={transactionSummaryStyles.rowContainer}>
      <View style={transactionSummaryStyles.categoryContainer}>
        <Typography type={'Title3SemiBold'} color={'gray4'}>
          {categoryList[category as RecentTransactionVariantType]}
        </Typography>
      </View>
      <View style={transactionSummaryStyles.rightColContainer}>
        <View
          style={[
            transactionSummaryStyles.keyNoteDateContainer,
            {marginLeft: amount ? undefined : 'auto'},
          ]}>
          <Typography type={'Body1Semibold'} color={'gray4'}>
            {keyNote}
          </Typography>
          <Typography type={'Body1Semibold'} color={'gray4'}>
            {date}
          </Typography>
        </View>
        {amount && (
          <View style={transactionSummaryStyles.amountContainer}>
            <Typography
              type={'Body1Semibold'}
              color={'gray6'}
              style={transactionSummaryStyles.amountText}>
              {formatToLocaleString(amount)}원
            </Typography>
          </View>
        )}
      </View>
    </View>
  );
}

const transactionSummaryStyles = StyleSheet.create({
  rowContainer: {
    height: 44,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  categoryContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: theme.palette.gray3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightColContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  keyNoteDateContainer: {display: 'flex', flexDirection: 'row', gap: 5},
  amountContainer: {maxWidth: 100},
  amountText: {textAlign: 'right'},
});

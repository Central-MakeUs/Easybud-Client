import {StyleSheet, View} from 'react-native';
import {theme} from 'styles';
import {categoryList} from 'constants/components/Transaction';
import Typography from 'components/@common/Typography';
import {TransactionProps} from 'components/@common/Transaction';

/**
 * @param category 카테고리 'profit'(수익) | 'cost'(비용) | 'account'(계정)
 * @param keyNote 적요
 * @param date 날짜 (형식: 2023.02.21)
 */
type TransactionSummaryProps = {
  category: TransactionProps['category'];
  keyNote: TransactionProps['keyNote'];
  date: TransactionProps['date'];
};

export default function TransactionSummary({
  category,
  keyNote,
  date,
}: TransactionSummaryProps) {
  return (
    <View style={transactionSummaryStyles.firstRowContainer}>
      <View style={transactionSummaryStyles.categoryContainer}>
        <Typography type={'Title2Regular'} color={'gray4'}>
          {categoryList[category]}
        </Typography>
      </View>
      <View style={transactionSummaryStyles.rightColContainer}>
        <Typography type={'Body2Semibold'} color={'gray4'}>
          {keyNote}
        </Typography>
        <Typography type={'Body2Semibold'} color={'gray4'}>
          {date}
        </Typography>
      </View>
    </View>
  );
}

const transactionSummaryStyles = StyleSheet.create({
  firstRowContainer: {
    height: 44,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    gap: 10,
  },
});

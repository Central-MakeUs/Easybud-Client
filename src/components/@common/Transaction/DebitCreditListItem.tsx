import {StyleSheet, View} from 'react-native';
import {formatToLocaleString} from 'utils/formatAmountValue';
import Typography from 'components/@common/Typography';
import {TransactionProps} from 'components/@common/Transaction';

/**
 * @param debitCreditList 차변/대변 리스트
 */
type DebitCreditListItemProps = {
  debitCreditList:
    | TransactionProps['debitList']
    | TransactionProps['creditList'];
};

export default function DebitCreditListItem({
  debitCreditList,
}: DebitCreditListItemProps) {
  return (
    <View style={debitCreditListItemStyles.debitCreditListContainer}>
      {debitCreditList?.map((debitCredit, index) => (
        <View
          key={index}
          style={debitCreditListItemStyles.debitCreditContainer}>
          <Typography type={'Body2Semibold'} color={'gray4'}>
            {debitCredit.secondaryCategoryContent}
          </Typography>
          <Typography type={'Body2Semibold'} color={'gray6'}>
            {formatToLocaleString(debitCredit.amount)}원
          </Typography>
        </View>
      ))}
    </View>
  );
}

const debitCreditListItemStyles = StyleSheet.create({
  debitCreditListContainer: {
    flex: 1,
    gap: 10,
    paddingHorizontal: 10,
  },
  debitCreditContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

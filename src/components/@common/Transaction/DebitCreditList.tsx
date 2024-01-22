import {StyleSheet, View} from 'react-native';
import {theme} from 'styles';
import {TransactionProps} from 'components/@common/Transaction';
import DebitCreditListItem from 'components/@common/Transaction/DebitCreditListItem';

/**
 * @param debitList 차변 리스트
 * @param creditList 대변 리스트
 */
type DebitCreditListProps = {
  debitList: TransactionProps['debitList'];
  creditList: TransactionProps['creditList'];
};

export default function DebitCreditList({
  debitList,
  creditList,
}: DebitCreditListProps) {
  return (
    <View style={debitCreditListStyles.secondRowContainer}>
      <DebitCreditListItem debitCreditList={debitList} />
      <View style={debitCreditListStyles.divider} />
      <DebitCreditListItem debitCreditList={creditList} />
    </View>
  );
}

const debitCreditListStyles = StyleSheet.create({
  secondRowContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 5,
  },
  divider: {
    backgroundColor: theme.palette.gray4,
    height: '100%',
    width: 1,
  },
});

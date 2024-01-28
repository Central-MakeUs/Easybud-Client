import Typography from 'components/@common/Typography';
import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {theme} from 'styles';
import {NewAccount} from 'types/account';
import {formatNumber, isDebit} from 'utils/formatAmountValue';

type DebitCreditOverviewProps = {accounts: NewAccount[]};

export default function DebitCreditOverview({
  accounts,
}: DebitCreditOverviewProps) {
  const [debits, credits] = useMemo(() => {
    const debit: NewAccount[] = [];
    const credit: NewAccount[] = [];

    accounts.forEach(account => {
      isDebit(account.type) ? debit.push(account) : credit.push(account);
    });

    return [debit, credit];
  }, [accounts]);

  return (
    <View style={styles.container}>
      <View style={{gap: 10, flex: 1}}>
        <Typography color="primary" type="Body2Semibold">
          차변
        </Typography>
        <View style={[styles.list]}>
          {debits.map((account, index) => (
            <View key={index} style={styles.item}>
              <Typography type={'Body2Semibold'} color={'gray4'}>
                {account.category.secondary}
              </Typography>
              <Typography type={'Body2Semibold'} color={'gray5'}>
                {formatNumber(account.amount)}원
              </Typography>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.divider} />
      <View style={{gap: 10, flex: 1}}>
        <Typography color="pink" type="Body2Semibold">
          대변
        </Typography>
        <View style={styles.list}>
          <View style={[styles.list, {alignItems: 'flex-start'}]}>
            {credits.map((account, index) => (
              <View key={index} style={styles.item}>
                <Typography type={'Body2Semibold'} color={'gray4'}>
                  {account.category.secondary.slice(0, 5)}
                </Typography>
                <Typography type={'Body2Semibold'} color={'gray5'}>
                  {formatNumber(account.amount)}원
                </Typography>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
  list: {
    flex: 1,
    gap: 10,
    paddingBottom: 5,
  },
  item: {
    gap: 2,
    justifyContent: 'space-between',
  },
  divider: {
    backgroundColor: theme.palette.gray4,
    height: '100%',
    width: 1,
  },
});

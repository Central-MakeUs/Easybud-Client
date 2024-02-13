import Typography from 'components/@common/Typography';
import useGetCategoryList from 'hooks/queries/AccountCategoryScreen/useGetCategoryList';
import {find} from 'lodash';
import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {NewAccount} from 'types/account';
import {PrimaryCategory, SecondaryCategory} from 'types/components/Transaction';
import {formatToLocaleString, isDebit} from 'utils/formatAmountValue';

type DebitCreditOverviewProps = {accounts: NewAccount[]};

export default function DebitCreditOverview({
  accounts,
}: DebitCreditOverviewProps) {
  const {data: categoryList} = useGetCategoryList();

  const [debits, credits] = useMemo(() => {
    const debit: {name: string; amount: number}[] = [];
    const credit: {name: string; amount: number}[] = [];

    accounts
      .filter(({amount}) => amount !== 0)
      .forEach(({type, category, amount}) => {
        const newAccount = {
          name: '',
          amount,
        };

        if (categoryList) {
          const primary = find(categoryList, {
            id: category.primaryId,
          }) as PrimaryCategory;

          if (primary) {
            const secondary = find(primary.subList, {
              id: category.secondaryId,
            }) as SecondaryCategory;

            newAccount.name = secondary.name;
          }
        }

        isDebit(type) ? debit.push(newAccount) : credit.push(newAccount);
      });

    return [debit, credit];
  }, [accounts, categoryList]);

  return (
    <View style={styles.container}>
      <View style={{gap: 10, flex: 1}}>
        <View
          style={[
            styles.debitCreditTextContainer,
            {
              backgroundColor: 'rgba(0, 87, 255, 0.1)',
            },
          ]}>
          <Typography color="primary" type="Body2Semibold">
            차변
          </Typography>
        </View>
        <View style={[styles.list]}>
          {debits.map((account, index) => {
            return (
              <View key={index} style={styles.item}>
                <Typography type={'Body2Semibold'} color={'gray4'}>
                  {account.name}
                </Typography>
                <Typography type={'Body1Semibold'} color={'gray5'}>
                  {formatToLocaleString(account.amount)}원
                </Typography>
              </View>
            );
          })}
        </View>
      </View>
      <View style={{gap: 10, flex: 1}}>
        <View
          style={[
            styles.debitCreditTextContainer,
            {
              backgroundColor: `rgba(254, 7, 7, 0.1)`,
            },
          ]}>
          <Typography color="pink" type="Body2Semibold">
            대변
          </Typography>
        </View>
        <View style={styles.list}>
          <View style={[styles.list, {alignItems: 'flex-start'}]}>
            {credits.map((account, index) => (
              <View key={index} style={styles.item}>
                <Typography type={'Body2Semibold'} color={'gray4'}>
                  {account.name}
                </Typography>
                <Typography type={'Body1Semibold'} color={'gray5'}>
                  {formatToLocaleString(account.amount)}원
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
    gap: 15,
  },
  debitCreditTextContainer: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    width: 40,
    borderRadius: 4,
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
});

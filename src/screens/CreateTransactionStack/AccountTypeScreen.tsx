import {useMemo, useState} from 'react';
import {cloneDeep, isEqual} from 'lodash';
import {CreateTransactionStackRouteProp} from 'navigators/types';
import ScreenContainer from 'components/@common/ScreenContainer';
import RightButton from 'components/CreateTransactionStack/RightButton';
import LeftButton from 'components/CreateTransactionStack/LeftButton';
import {NewTransaction} from 'types/transaction';
import {AccountTypeUnion, NewAccount} from 'types/account';
import Button from 'components/@common/Buttons/Button';
import {StyleSheet, View} from 'react-native';

const accountTypes: AccountTypeUnion[] = [
  {name: '자산', change: '증가'}, // 차변
  {name: '자산', change: '감소'},
  {name: '부채', change: '감소'}, // 차변
  {name: '부채', change: '증가'},
  {name: '자본', change: '감소'}, // 차변
  {name: '자본', change: '증가'},
  {name: '비용', change: '발생'}, // 차변
  {name: '수익', change: '발생'},
] as const;

const initialAccount: NewAccount = {
  type: accountTypes[0],
  amount: 0,
  category: {primary: '', secondary: ''},
};

export type AccountTypeScreenProps = {
  route: CreateTransactionStackRouteProp<'AccountType'>;
};

/** 거래 추가 Step 2 */
export default function AccountTypeScreen({
  route: {params},
}: AccountTypeScreenProps) {
  const {transaction: prevTransaction, isUpdateStep, accountIndex} = params;

  const [account, setAccount] = useState<NewAccount>(
    // 이전 버튼이었다가 다시 돌아가는 걸 어케알아차리지 ? ? ??
    isUpdateStep ? prevTransaction.accounts[accountIndex] : initialAccount,
  );

  const transaction = useMemo<NewTransaction>(() => {
    const accounts = cloneDeep(prevTransaction.accounts);

    if (isUpdateStep) {
      accounts[accountIndex] = account;
    } else {
      accounts.push(account);
    }

    return {...prevTransaction, accounts};
  }, [account, accountIndex, isUpdateStep, prevTransaction]);

  const handleChangeAccountType = (type: AccountTypeUnion) => {
    setAccount(prev => ({...prev, type}));
  };

  const disabledRightButton = useMemo(() => {
    return (
      isUpdateStep &&
      isEqual(account.type, prevTransaction.accounts[accountIndex].type)
    );
  }, [account, accountIndex, isUpdateStep, prevTransaction.accounts]);

  return (
    <ScreenContainer
      fixedBottomComponent={
        <>
          <LeftButton
            isUpdateStep={isUpdateStep}
            transaction={prevTransaction}
          />
          <RightButton
            disabled={disabledRightButton}
            nextScreen="AccountCategory"
            isUpdateStep={isUpdateStep}
            transaction={transaction}
          />
        </>
      }>
      <View style={styles.container}>
        {accountTypes.map(item => (
          <Button
            style={styles.item}
            key={`${item.name} ${item.change}`}
            onPress={() => handleChangeAccountType(item)}
            variant={
              isEqual(account.type, item) ? 'primary' : 'secondary'
            }>{`${item.name} ${item.change}`}</Button>
        ))}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    flexBasis: '40%',
  },
});

import {StyleSheet, View} from 'react-native';
import {isEqual} from 'lodash';
import {CreateTransactionStackRouteProp} from 'navigators/types';
import {AccountTypeUnion} from 'types/account';

import RightButton from 'components/CreateTransactionStack/RightButton';
import LeftButton from 'components/CreateTransactionStack/LeftButton';
import Button from 'components/@common/Buttons/Button';
import Container from 'components/CreateTransactionStack/Container';
import useAccount from 'hooks/useAccount';

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

export type AccountTypeScreenProps = {
  route: CreateTransactionStackRouteProp<'AccountType'>;
};

/** 거래 추가 Step 2 */
export default function AccountTypeScreen({
  route: {params},
}: AccountTypeScreenProps) {
  const {isUpdateStep, accountIndex} = params;
  const {account, updateAccount} = useAccount({accountIndex});

  return (
    <Container
      screen="AccountType"
      accountIndex={accountIndex}
      header={{title: '거래 요소를 선택해주세요'}}
      fixedBottomComponent={
        <>
          <LeftButton isUpdateStep={isUpdateStep} />
          <RightButton
            nextScreen="AccountCategory"
            isUpdateStep={isUpdateStep}
            accountIndex={accountIndex}
          />
        </>
      }>
      <View style={styles.container}>
        {accountTypes.map(item => (
          <Button
            style={styles.item}
            key={`${item.name} ${item.change}`}
            onPress={() => updateAccount('type', item)}
            variant={
              isEqual(account.type, item) ? 'primary' : 'secondary'
            }>{`${item.name} ${item.change}`}</Button>
        ))}
      </View>
    </Container>
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

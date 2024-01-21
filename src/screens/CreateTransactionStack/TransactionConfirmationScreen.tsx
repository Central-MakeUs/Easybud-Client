import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import Button from 'components/@common/buttons/Button';
import {
  CreateTransactionStackRouteProp,
  CreateTransactionStackScreenName,
  RootStackNavigationProp,
} from 'navigators/types';

type TransactionConfirmationScreenProps = {
  navigation: RootStackNavigationProp;
  route: CreateTransactionStackRouteProp<'TransactionConfirmation'>;
};

/** 거래 추가 Step 5 */
export default function TransactionConfirmationScreen({
  navigation,
  route: {params},
}: TransactionConfirmationScreenProps) {
  const {transaction} = params;

  const handleSave = () => {
    navigation.navigate('Tab', {screen: 'Ledger'});
  };

  const handleAddAccount = () => {
    navigation.push('CreateTransactionStack', {
      screen: 'AccountType',
      params: {transaction},
    });
  };

  const handleUpdateTransaction = ({screen, accountIndex}: Basic | Account) => {
    if (screen === 'BasicTransactionInfo') {
      navigation.push('CreateTransactionStack', {
        screen: screen,
        params: {
          transaction,
          isUpdateStep: true,
        },
      });
    } else {
      navigation.push('CreateTransactionStack', {
        screen: screen,
        params: {
          transaction,
          isUpdateStep: true,
          accountIndex,
        },
      });
    }
  };

  return (
    <ScreenContainer
      fixedBottomComponent={
        <>
          <Button variant="secondary" onPress={handleAddAccount}>
            새 계정 추가
          </Button>
          <Button onPress={handleSave}>저장</Button>
        </>
      }>
      <Button
        onPress={() =>
          handleUpdateTransaction({screen: 'BasicTransactionInfo'})
        }>
        handleUpdate BasicTransactionInfo
      </Button>
      <Button
        onPress={() =>
          handleUpdateTransaction({screen: 'AccountCategory', accountIndex: 0})
        }>
        handleUpdate AccountCategory accountIndex 0
      </Button>
      <Typography>TransactionConfirmationScreen</Typography>
    </ScreenContainer>
  );
}

type Basic = {
  screen: Extract<CreateTransactionStackScreenName, 'BasicTransactionInfo'>;
  accountIndex?: never;
};

type Account = {
  screen: Exclude<
    CreateTransactionStackScreenName,
    'BasicTransactionInfo' | 'TransactionConfirmation'
  >;
  accountIndex: number;
};

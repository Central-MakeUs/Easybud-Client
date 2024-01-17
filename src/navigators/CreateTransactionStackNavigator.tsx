import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {CreateTransactionStackParamList} from 'navigators/types';
import AccountAmountScreen from 'screens/CreateTransactionStack/AccountAmountScreen';
import AccountTypeScreen from 'screens/CreateTransactionStack/AccountTypeScreen';
import DebitCreditDeciderScreen from 'screens/CreateTransactionStack/DebitCreditDeciderScreen';
import TransactionConfirmationScreen from 'screens/CreateTransactionStack/TransactionConfirmationScreen';

const Stack = createNativeStackNavigator<CreateTransactionStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  headerShadowVisible: false,
};

export default function CreateTransactionStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={'DebitCreditDecider'}
      screenOptions={screenOptions}>
      <Stack.Screen
        name={'DebitCreditDecider'}
        component={DebitCreditDeciderScreen}
      />
      <Stack.Screen name={'AccountType'} component={AccountTypeScreen} />
      <Stack.Screen name={'AccountAmount'} component={AccountAmountScreen} />
      <Stack.Screen
        name={'TransactionConfirmation'}
        component={TransactionConfirmationScreen}
      />
    </Stack.Navigator>
  );
}

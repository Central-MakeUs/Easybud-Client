import {
  CardStyleInterpolators,
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import {CreateTransactionStackParamList} from 'navigators/types';
import AccountAmountScreen from 'screens/CreateTransactionStack/AccountAmountScreen';
import AccountCategoryScreen from 'screens/CreateTransactionStack/AccountCategoryScreen';
import AccountTypeScreen from 'screens/CreateTransactionStack/AccountTypeScreen';
import TransactionConfirmationScreen from 'screens/CreateTransactionStack/TransactionConfirmationScreen';
import BasicTransactionInfoScreen from 'screens/CreateTransactionStack/BasicTransactionInfoScreen';

const Stack = createStackNavigator<CreateTransactionStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  headerShadowVisible: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

export default function CreateTransactionStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={'BasicTransactionInfo'}
      screenOptions={screenOptions}>
      <Stack.Screen
        name={'BasicTransactionInfo'}
        component={BasicTransactionInfoScreen}
      />
      <Stack.Screen name={'AccountType'} component={AccountTypeScreen} />
      <Stack.Screen
        name={'AccountCategory'}
        component={AccountCategoryScreen}
      />
      <Stack.Screen name={'AccountAmount'} component={AccountAmountScreen} />
      <Stack.Screen
        name={'TransactionConfirmation'}
        component={TransactionConfirmationScreen}
      />
    </Stack.Navigator>
  );
}

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {
  CardStyleInterpolators,
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import AccountAmountScreen from 'screens/CreateTransactionStack/AccountAmountScreen';
import AccountTypeScreen from 'screens/CreateTransactionStack/AccountTypeScreen';
import DebitCreditDeciderScreen from 'screens/CreateTransactionStack/DebitCreditDeciderScreen';
import TransactionConfirmationScreen from 'screens/CreateTransactionStack/TransactionConfirmationScreen';
import {CreateTransactionStackParamList} from 'navigators/types';
import {theme} from 'styles';

const Stack = createStackNavigator<CreateTransactionStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  headerShadowVisible: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

export default function CreateTransactionStackNavigator() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar />
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.palette.gray1,
  },
});

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {
  CardStyleInterpolators,
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import AccountAmountScreen from 'screens/CreateTransactionStack/AccountAmountScreen';
import AccountCategoryScreen from 'screens/CreateTransactionStack/AccountCategoryScreen';
import AccountTypeScreen from 'screens/CreateTransactionStack/AccountTypeScreen';
import TransactionConfirmationScreen from 'screens/CreateTransactionStack/TransactionConfirmationScreen';
import {CreateTransactionStackParamList} from 'navigators/types';
import {theme} from 'styles';
import BasicTransactionInfoScreen from 'screens/CreateTransactionStack/BasicTransactionInfoScreen';

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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.palette.gray1,
  },
});

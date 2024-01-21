import CreateTransactionStackNavigator from 'navigators/CreateTransactionStackNavigator';
import {Stack} from 'navigators/RootStackNavigator';
import TabNavigator from 'navigators/TabNavigator';
import SettingScreen from 'screens/SettingScreen';

export default function AuthenticatedScreens() {
  return (
    <>
      <Stack.Screen name={'Tab'} component={TabNavigator} />
      <Stack.Screen
        name={'CreateTransactionStack'}
        component={CreateTransactionStackNavigator}
        options={{
          headerShown: true,
          headerBackTitleVisible: true,
          headerTitle: '거래 추가',
          // note: navigation.push()로 인해 새 계정 추가 시 아래 설정으로 stack이 쌓이기에 통일성을 위해 변경하지 않음
          // presentation: 'containedModal',
        }}
      />
      <Stack.Screen
        name={'Setting'}
        component={SettingScreen}
        options={{
          headerShown: true,
          headerBackTitleVisible: true,
          headerTitle: '설정',
        }}
      />
    </>
  );
}

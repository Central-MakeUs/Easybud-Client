import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Funnel from 'components/@common/Funnel/Funnel';
import Step from 'components/@common/Funnel/Step';
import TabNavigator from 'navigators/TabNavigator';
import {StackMenu} from 'navigators/constants/menu';
import {StackParamList} from 'navigators/types';
import Description from 'screens/OnBoarding/Description';
import Login from 'screens/OnBoarding/Login';
import UserInfo from 'screens/OnBoarding/UserInfo';

const Stack = createNativeStackNavigator<StackParamList>();

const screenOptions = {
  headerShown: false,
  headerShadowVisible: false,
};

type StackNavigatorProps = {
  isLoggedIn: boolean;
};

export default function StackNavigator({isLoggedIn}: StackNavigatorProps) {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={StackMenu.OnBoarding}
        component={
          isLoggedIn
            ? TabNavigator
            : () => (
                <Funnel
                  steps={['Description', 'Login', 'UserInfo']}
                  step={'UserInfo'}>
                  <Step name={'Description'}>
                    <Description />
                  </Step>
                  <Step name={'Login'}>
                    <Login />
                  </Step>
                  <Step name={'UserInfo'}>
                    <UserInfo />
                  </Step>
                </Funnel>
              )
        }
      />
    </Stack.Navigator>
  );
}

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
                <Funnel steps={['Step1', 'Step2', 'Step3']} step={'Step1'}>
                  <Step name={'Step1'}>
                    <Description />
                  </Step>
                  <Step name={'Step2'}>
                    <Login />
                  </Step>
                  <Step name={'Step3'}>
                    <UserInfo />
                  </Step>
                </Funnel>
              )
        }
      />
    </Stack.Navigator>
  );
}

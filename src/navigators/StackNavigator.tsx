import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useRecoilValue} from 'recoil';
import {stepsState} from 'libs/recoil/steps';
import TabNavigator from 'navigators/TabNavigator';
import {StackMenu} from 'navigators/constants/menu';
import {Steps, steps} from 'navigators/constants/step';
import {StackParamList} from 'navigators/types';
import Description from 'screens/OnBoarding/Description';
import Login from 'screens/OnBoarding/Login';
import UserInfo from 'screens/OnBoarding/UserInfo';
import Funnel from 'components/@common/Funnel/Funnel';
import Step from 'components/@common/Funnel/Step';

const Stack = createNativeStackNavigator<StackParamList>();

const screenOptions = {
  headerShown: false,
  headerShadowVisible: false,
};

type StackNavigatorProps = {
  isLoggedIn: boolean;
};

export default function StackNavigator({isLoggedIn}: StackNavigatorProps) {
  const {currentStep} = useRecoilValue(stepsState);

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={StackMenu.OnBoarding}
        component={
          isLoggedIn
            ? TabNavigator
            : () => (
                <Funnel steps={steps} step={currentStep}>
                  <Step name={Steps.Step1}>
                    <Description />
                  </Step>
                  <Step name={Steps.Step2}>
                    <Login />
                  </Step>
                  <Step name={Steps.Step3}>
                    <UserInfo />
                  </Step>
                </Funnel>
              )
        }
      />
    </Stack.Navigator>
  );
}

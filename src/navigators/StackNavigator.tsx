import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useRecoilValue} from 'recoil';
import {stepsState} from 'libs/recoil/steps';
import TabNavigator from 'navigators/TabNavigator';
import {StackMenu} from 'navigators/constants/menu';
import {stepInfoList, steps} from 'navigators/constants/steps';
import {StackParamList} from 'navigators/types';
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
                  {stepInfoList.map(({name, component}) => (
                    <Step key={name} name={name}>
                      {component}
                    </Step>
                  ))}
                </Funnel>
              )
        }
      />
    </Stack.Navigator>
  );
}

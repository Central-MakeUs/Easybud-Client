import React from 'react';
import AccountCategoryDescriptionScreen from 'screens/OnBoardingFunnelScreen/AccountCategoryDescriptionScreen';
import AccountDetailsDescriptionScreen from 'screens/OnBoardingFunnelScreen/AccountDetailsDescriptionScreen';
import AccountTypeDescriptionScreen from 'screens/OnBoardingFunnelScreen/AccountTypeDescriptionScreen';
import LedgerDescriptionScreen from 'screens/OnBoardingFunnelScreen/LedgerDescriptionScreen';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from 'navigators/types';
import {Stack} from 'navigators/constants/stack';

export default function OnBoardingFunnelScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();

  const stepInfoList = {
    // Step1: <LoginStepScreen onNext={() => setCurrentStep('Step2')} />,
    Step2: (
      <LedgerDescriptionScreen onNext={() => navigation.navigate('Step3')} />
    ),
    Step3: (
      <AccountTypeDescriptionScreen
        onNext={() => navigation.navigate('Step4')}
      />
    ),
    Step4: (
      <AccountCategoryDescriptionScreen
        onNext={() => navigation.navigate('Step5')}
      />
    ),
    Step5: <AccountDetailsDescriptionScreen onNext={() => {}} />,
  };

  return (
    <Stack.Navigator>
      {Object.entries(stepInfoList).map(([name, component]) => {
        const ScreenComponent = () => component;
        return (
          <Stack.Screen
            key={name}
            name={name as keyof typeof stepInfoList}
            component={ScreenComponent}
            options={{headerShown: false}}
          />
        );
      })}
    </Stack.Navigator>
  );
}

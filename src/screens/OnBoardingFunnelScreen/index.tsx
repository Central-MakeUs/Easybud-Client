import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {OnBoardingNavigationProp, RootStackParamList} from 'navigators/types';
import {Stack} from 'navigators/constants/stack';
import useInitialData from 'hooks/useInitialData';
import LoginStepScreen from 'screens/OnBoardingFunnelScreen/LoginStepScreen';
import AccountCategoryDescriptionScreen from 'screens/OnBoardingFunnelScreen/AccountCategoryDescriptionScreen';
import AccountDetailsDescriptionScreen from 'screens/OnBoardingFunnelScreen/AccountDetailsDescriptionScreen';
import AccountTypeDescriptionScreen from 'screens/OnBoardingFunnelScreen/AccountTypeDescriptionScreen';
import LedgerDescriptionScreen from 'screens/OnBoardingFunnelScreen/LedgerDescriptionScreen';

export default function OnBoardingFunnelScreen() {
  const navigation = useNavigation<OnBoardingNavigationProp>();

  const {setAuthData} = useInitialData();

  console.log(1);

  const stepInfoList = {
    Step1: (
      <LoginStepScreen
        onNext={(type: string) => {
          if (type === 'REGISTER') {
            navigation.navigate('Step2');
          } else {
            setAuthData({isAuthenticated: true});
          }
        }}
      />
    ),
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
    Step5: (
      <AccountDetailsDescriptionScreen
        onNext={() => {
          setAuthData({isAuthenticated: true});
        }}
      />
    ),
  };

  return (
    <Stack.Navigator>
      {Object.entries(stepInfoList).map(([name, component]) => {
        const ScreenComponent = () => component;
        return (
          <Stack.Screen
            key={name}
            name={name as keyof RootStackParamList}
            component={ScreenComponent}
            options={{headerShown: false}}
          />
        );
      })}
    </Stack.Navigator>
  );
}

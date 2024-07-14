import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import GetStartedView from '../../../view/GetStartedView/view/get_started_view';
import OnboardingView from '../../../view/OnboardingView/view/onboarding_view';
import PaywallView from '../../../view/PaywallView/view/paywall_view';
import HomeView from '../../../view/HomeView/view/home_view';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GetStarted"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="GetStarted"
          component={GetStartedView}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingView}
        />
        <Stack.Screen
          name="Paywall"
          component={PaywallView}
        />
        <Stack.Screen
          name="Home"
          component={HomeView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
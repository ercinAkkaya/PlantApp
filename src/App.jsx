import React from 'react';
import { View, StyleSheet } from 'react-native';
import OnboardingView from './view/OnboardingView/view/onboarding_view';

const App = () => {
  return (
    <View style={styles.container}>
      <OnboardingView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6faff',
  },
});

export default App;

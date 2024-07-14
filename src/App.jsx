import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';
import Navigation from '../src/core/init/navigation/navigation_route';
import PaywallView from './view/PaywallView/view/paywall_view';
import GetStartedView from './view/GetStartedView/view/get_started_view';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2fafd',
  },
});

export default App;
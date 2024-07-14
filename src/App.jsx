// src/App.js
import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import GetStartedView from '../src/view/GetStartedView/view/get_started_view';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <GetStartedView />
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

export default App;

import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import PaywallView from './view/PaywallView/view/paywall_view';
import SearchBar from './components/bar/search_bar';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});

export default App;
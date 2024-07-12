import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import PremiumCard from './components/card/premium_card';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PremiumCard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2', // Arka plan rengini tercihinize göre değiştirebilirsiniz
  },
});

export default App;
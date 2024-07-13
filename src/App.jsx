import React from 'react';
import { View, StyleSheet } from 'react-native';
import GetStartedView from './view/GetStartedView/view/get_started_view';

const App = () => {
  return (
    <View style={styles.container}>
      <GetStartedView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Arka plan rengi beyaz
  },
});

export default App;

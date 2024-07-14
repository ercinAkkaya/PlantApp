import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';
import Navigation from '../src/core/init/navigation/navigation_route';
import theme from '../src/core/init/theme/theme';

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
    backgroundColor: theme.colors.background,
  },
});

export default App;
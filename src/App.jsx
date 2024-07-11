import React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import CustomButton from './components/Button/default_button';

const App = () => {
  const handlePress = () => {
    Alert.alert('Butona tıklandı!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <CustomButton title="Tıkla" onPress={handlePress}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default App;

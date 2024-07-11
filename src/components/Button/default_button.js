// components/Button/CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import theme from '../../core/init/theme';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: theme.colors.primary }]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;

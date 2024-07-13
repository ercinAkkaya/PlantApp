// components/Button/CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import context from '../../core/extension/context';
import theme from '../../core/init/theme/theme';

const DefaultButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: '#28af6d' }]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: context.getDynamicHeight(7),
    padding: context.paddingLow.padding,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:10
  },
  buttonText: {
    ...theme.textTheme.labelLarge,
    
  },
});

export default DefaultButton;
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import theme from '../../core/init/theme/theme';
import context from '../../core/extension/context';

const DefaultButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: theme.colors.primary }]} 
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: context.getDynamicHeight(7),
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  buttonText: {
    ...theme.textTheme.labelLarge
  },
});

export default DefaultButton;

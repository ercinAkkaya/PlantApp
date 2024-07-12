import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import context from '../../core/extension/context';
import theme from '../../core/init/theme/theme'; 

const RadioButton = ({ selected, onPress }) => {
  return (
    <TouchableOpacity style={styles.radioButtonContainer} onPress={onPress}>
      <View style={[styles.radioButton, selected && styles.radioButtonSelected]}>
        {selected && <View style={styles.radioButtonInner} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButton: {
    backgroundColor: theme.colors.grey,
    height: context.getDynamicHeight(3),
    width: context.getDynamicHeight(3),
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    backgroundColor: theme.colors.primary,
  },
  radioButtonInner: {
    height: context.getDynamicHeight(1),
    width: context.getDynamicHeight(1),
    borderRadius: 5,
    backgroundColor: theme.colors.background,
  },
});

export default RadioButton;
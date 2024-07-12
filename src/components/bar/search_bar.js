import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';
import context from '../../core/extension/context';
import theme from '../../core/init/theme/theme'; 

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/png/search.png')} style={styles.icon} />
      <TextInput
        placeholder="Search for plants"
        placeholderTextColor={'#acacac'}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.onPrimary,
    borderRadius: 20,
    padding: context.paddingLow.padding,
    height: context.getDynamicHeight(8)
  },
  icon: {
    height: context.getDynamicHeight(3),
    width:context.getDynamicHeight(3),
    marginRight: context.paddingLow.padding,
  },
  input: {
    color: theme.colors.secondary,
    flex: 1,
  },
});

export default SearchBar;
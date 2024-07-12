import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import RadioButton from '../Button/radio_button';
import context from '../../core/extension/context';
import theme from '../../core/init/theme/theme'; 


const SubscriptionCard = ({ title, description, price, selected, onPress }) => {
  return (
    <TouchableOpacity style={[styles.card, selected && styles.cardSelected]} onPress={onPress}>
      <RadioButton selected={selected} onPress={onPress} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      {price === 'Save 50%' && (
        <View style={styles.priceTag}>
          <Text style={styles.priceTagText}>{price}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.greyDark,
    flexDirection: 'row',
    padding: context.paddingNormal.padding,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.greyLight,
    marginVertical: context.paddingLow.padding,
    alignItems: 'center',
    position: 'relative',
  },
  cardSelected: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.territary,
  },
  textContainer: {
    marginLeft: context.paddingLow.padding,
    flex: 1,
  },
  title: {
    ...theme.textTheme.headlineMedium,
  },
  description: {
    ...theme.textTheme.labelMedium,
    opacity: 0.7
  },
  priceTag: {
    position: 'absolute',
    top: -1, 
    right: -1,
    backgroundColor: theme.colors.primary,
    borderBottomLeftRadius: 10,
    borderTopRightRadius:10,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  priceTagText: {
    ...theme.textTheme.bodyMedium,
  },
});

export default SubscriptionCard;
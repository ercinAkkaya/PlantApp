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
    height: context.getDynamicHeight(8),
    padding: context.paddingLow.padding,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.greyLight,
    marginVertical: context.getDynamicHeight(1),
    alignItems: 'center',
    position: 'relative',
  },
  cardSelected: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.territary,
  },
  textContainer: {
    marginLeft: context.getDynamicWidth(5),
    flex: 1,
  },
  title: {
    ...theme.textTheme.labelLarge,
    color: theme.colors.background,
  },
  description: {
    ...theme.textTheme.bodyMedium,
    color: '#b6bfba',
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
    ...theme.textTheme.labelMedium,
    fontWeight: 'bold',
  },
});

export default SubscriptionCard;
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import context from '../../core/extension/context';
import theme from '../../core/init/theme/theme'; 


const PremiumFeatureCard = ({ imageSource, title, description }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: context.getDynamicWidth(38),
    height: context.getDynamicHeight(18),
    backgroundColor: '#233029',
    borderRadius: 15,
    marginVertical: context.getDynamicWidth(1),
    marginHorizontal: context.getDynamicHeight(1),
    overflow: 'hidden',
    padding: context.paddingLow.padding,
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  imageContainer: {
    width: context.getDynamicWidth(10), 
    height: context.getDynamicHeight(5), 
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: theme.colors.greyDark,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  image: {
    height: context.getDynamicHeight(3),
    width: context.getDynamicWidth(5) 
  },
  content: {
    paddingTop: context.paddingLow.padding, 
    alignItems: 'flex-start',
  },
  title: {
    ...theme.textTheme.headlineLarge,
    color: theme.colors.background
  },
  description: {
    ...theme.textTheme.labelMedium,
    opacity: 0.9,
  },
});

export default PremiumFeatureCard;
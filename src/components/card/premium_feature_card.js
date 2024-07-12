// PremiumFeatureCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import theme from '../../core/init/theme'; 
import context from '../../core/extension/context';

const PremiumFeatureCard = ({ imageSource, title, description }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} tintColor='white' />
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
    width: '45%',
    height: '60%',
    backgroundColor: theme.colors.primary,
    borderRadius: 15,
    margin: 10,
    overflow: 'hidden',
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  imageContainer: {
    width: '30%', 
    height: '35%', 
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#1b2521',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  image: {
    resizeMode: 'contain', 
  },
  content: {
    paddingTop: 20, 
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: theme.colors.textTitle,
  },
  description: {
    fontSize: 14,
    color: theme.colors.textDescription,
    opacity: 0.9,
  },
});

export default PremiumFeatureCard;

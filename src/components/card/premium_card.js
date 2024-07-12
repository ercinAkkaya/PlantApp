import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import context from '../../core/extension/context';

const PremiumCard = () => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => alert('Card Tapped')}>
      <Image source={require('../../../assets/png/envelope.png')} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>FREE Premium Available</Text>
        <Text style={styles.subtitle}>Tap to upgrade your account!</Text>
      </View>
      <Image source={require('../../../assets/png/right-arrow.png')} style={styles.arrowIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: context.paddingNormal.padding,
    backgroundColor: '#241c19',
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  icon: {
    width: '9%',
    height: '73%',
    marginHorizontal: context.paddingLow.padding,
  },
  textContainer: {
    marginHorizontal: context.paddingLow.padding,
    flex: 1,
  },
  title: {
    color: '#e7c993',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    color: '#cda959',
  },
  arrowIcon: {
    width: 16,
    height: 16,
    marginHorizontal: context.paddingLow.padding,
  },
});

export default PremiumCard;

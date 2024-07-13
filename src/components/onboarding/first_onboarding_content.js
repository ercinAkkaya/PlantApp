import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import context from '../../core/extension/context';
import theme from '../../core/init/theme/theme'; 


const FirstOnboardingContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Take a photo to <Text style={styles.titleBold}>identify</Text>
      </Text>
      <View style={styles.lineRowStyle}>
      <Text style={styles.title}>the plant!</Text>
      <Image
        source={require('../../../assets/png/line.png')}
        style={styles.lineImage}
        resizeMode="contain"
      />
      </View>
      <Image
        source={require('../../../assets/png/onboardingPhoto.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'flex-start',
  },
  title: {
    ...theme.textTheme.headlineLarge,
    color: theme.colors.secondary,
    paddingStart: context.paddingMedium.padding,
    textAlign: 'flex-start', 
  },
  titleBold: {
    ...theme.textTheme.headlineLarge,
    fontWeight: '800',
  },
  lineImage: {
    width: context.getDynamicWidth(30),
    height: context.getDynamicHeight(3),
    marginBottom: context.paddingLow.padding,
    marginLeft: context.getDynamicWidth(17),
  },
  lineRowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    height: context.getDynamicHeight(70),
    width: context.getDynamicWidth(100),
  },
});

export default FirstOnboardingContent;

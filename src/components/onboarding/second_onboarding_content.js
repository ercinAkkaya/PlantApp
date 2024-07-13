import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import context from '../../core/extension/context';
import theme from '../../core/init/theme/theme'; 

const SecondOnboardingContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Get plant</Text>
        <Text style={styles.titleBold}> Care guides</Text>
      </View>
      <Image
        source={require('../../../assets/png/line.png')}
        style={styles.lineImage}
        resizeMode="contain"
      />
      <ImageBackground
        source={require('../../../assets/png/onboardingBackground.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay} />
        <Image
          source={require('../../../assets/png/phonePhoto.png')}
          style={styles.foregroundImage}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: context.paddingMedium.padding,
    marginBottom: context.paddingLow.padding / 2,
  },
  title: {
    ...theme.textTheme.headlineLarge,
    color: theme.colors.secondary,
  },
  titleBold: {
    ...theme.textTheme.headlineLarge,
    fontWeight: '800',
  },
  lineImage: {
    width: context.getDynamicWidth(40),
    height: context.getDynamicHeight(3),
    marginBottom: context.paddingLow.padding,
    marginLeft: context.getDynamicWidth(35),
  },
  backgroundImage: {
    width: context.getDynamicWidth(100),
    height: context.getDynamicHeight(70),
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(246, 250, 255, 0.55)',
  },
  foregroundImage: {
    width: context.getDynamicWidth(90),
    height: context.getDynamicHeight(90),
    resizeMode: 'contain',
  },
});

export default SecondOnboardingContent;

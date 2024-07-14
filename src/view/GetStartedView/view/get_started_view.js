import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import context from '../../../core/extension/context';
import theme from '../../../core/init/theme/theme';
import DefaultButton from '../../../components/Button/default_button';
import GetStartedViewModel from '../viewmodel/get_started_viewmodel';

const GetStartedView = () => {
  const navigation = useNavigation();
  const viewModel = new GetStartedViewModel(navigation.navigate);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Welcome to <Text style={styles.boldText}>PlantApp</Text>
      </Text>
      <Text style={styles.descriptionText}>
        Identify more than 3000+ plants{'\n'}88% accuracy.
      </Text>
      <Image
        source={require('../../../../assets/png/getStartedImage.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.buttonContainer}>
        <DefaultButton title={'Get Started'} onPress={viewModel.getStartedButtonOnTap} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          By tapping Next, you are agreeing to PlantID{' '}
          <TouchableOpacity onPress={viewModel.termOfUseOnTap}>
            <Text style={styles.link}>Terms of Use</Text>
          </TouchableOpacity>{' '}
          &{' '}
          <TouchableOpacity onPress={viewModel.privacyPolicyOnTap}>
            <Text style={styles.link}>Privacy Policy</Text>
          </TouchableOpacity>.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: context.paddingMedium.padding,
    paddingHorizontal: context.paddingMedium.padding,
    backgroundColor: '#f6faff',
  },
  welcomeText: {
    ...theme.textTheme.displayLarge,
    color: theme.colors.secondary,
  },
  boldText: {
    fontWeight: 'bold',
  },
  descriptionText: {
    marginTop: context.getDynamicHeight(1),
    marginEnd: context.getDynamicWidth(2),
    ...theme.textTheme.headlineMedium,
    color: theme.colors.secondary,
    opacity: 0.6,
  },
  image: {
    marginTop: context.paddingMedium.padding,
    height: context.getDynamicHeight(60),
    width: context.getDynamicWidth(85),
  },
  buttonContainer: {
    marginTop: context.getDynamicHeight(2),
    width: context.getDynamicWidth(85),
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    marginTop: 'auto',
    padding: context.paddingMedium.padding,
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    ...theme.textTheme.bodyMedium,
    color: theme.colors.secondary,
    textAlign: 'center',
    opacity: 0.6,
  },
  link: {
    color: theme.colors.secondary,
    textDecorationLine: 'underline',
    opacity: 0.6,
  },
});

export default GetStartedView;

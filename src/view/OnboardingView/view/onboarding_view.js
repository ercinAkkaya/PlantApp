import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import context from '../../../core/extension/context';
import FirstOnboardingContent from '../../../components/onboarding/first_onboarding_content';
import DefaultButton from '../../../components/Button/default_button';
import theme from '../../../core/init/theme/theme';
import SecondOnboardingContent from '../../../components/onboarding/second_onboarding_content';
import OnboardingViewModel from '../viewmodel/onboarding_viewmodel';

const OnboardingView = () => {
  const navigation = useNavigation();
  const viewModel = new OnboardingViewModel(navigation.navigate);
  const [step, setStep] = useState(viewModel.step);

  useEffect(() => {
    viewModel.addListener(setStep);
    return () => {
      // Clean up the listener when the component unmounts
      viewModel.listeners = viewModel.listeners.filter(listener => listener !== setStep);
    };
  }, [viewModel]);

  const handleContinue = () => {
    viewModel.handleContinue();
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {step === 0 && <FirstOnboardingContent />}
        {step === 1 && <SecondOnboardingContent />}
      </View>
      <View style={styles.buttonContainer}>
        <DefaultButton title={'Continue'} onPress={handleContinue} />
        <View style={styles.indicatorContainer}>
          <View style={[styles.indicator, step === 0 && styles.activeIndicator]} />
          <View style={[styles.indicator, step === 1 && styles.activeIndicator]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: context.paddingMedium.padding,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: context.getDynamicHeight(6),
    paddingHorizontal: context.paddingMedium.padding,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: context.getDynamicHeight(5),
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: '#d6d6d6',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: theme.colors.secondary,
    width: 10,
    height: 10,
  },
});

export default OnboardingView;

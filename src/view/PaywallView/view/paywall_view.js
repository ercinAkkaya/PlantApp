import { View, Image, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import DefaultButton from '../../../components/Button/default_button';
import PremiumFeatureCard from '../../../components/card/premium_feature_card';
import SubscriptionCard from '../../../components/card/subscription_card';
import context from '../../../core/extension/context';
import theme from '../../../core/init/theme/theme';
import usePaywallViewModel from '../viewmodel/paywall_viewmodel';
import Toast from 'react-native-toast-message';

const PaywallView = () => {
  const {
    selectedSubscription,
    termsOnTap,
    privacyOnTap,
    restoreOnTap,
    handleSubscriptionSelect,
    crossButtonOnTap,
  } = usePaywallViewModel();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../../../assets/png/plant.png')} style={styles.image} />
        <TouchableOpacity style={styles.crossContainer} onPress={crossButtonOnTap}> 
          <View style={styles.crossBackground}>
            <Image source={require('../../../../assets/png/cross.png')} style={styles.crossImage} />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>
        <Text style={styles.titleBold}>PlantApp</Text> Premium
      </Text>
      <Text style={styles.subtitle}>Access All Features</Text>
      <ScrollView
        horizontal
        pagingEnabled
        contentContainerStyle={styles.scroll}>
        <PremiumFeatureCard
          imageSource={require('../../../../assets/png/scan.png')}
          description={'Plant identify'}
          title={'Unlimited'}
        />
        <PremiumFeatureCard
          imageSource={require('../../../../assets/png/speedometer.png')}
          description={'Process'}
          title={'Faster'}
        />
        <PremiumFeatureCard
          imageSource={require('../../../../assets/png/plant-icon.png')}
          description={'Plant description'}
          title={'Describe'}
        />
      </ScrollView>
      <SubscriptionCard
        title="1 Month"
        description="$2.99/month, auto renewable"
        price=""
        selected={selectedSubscription === '1month'}
        onPress={() => handleSubscriptionSelect('1month')}
      />
      <SubscriptionCard
        title="1 Year"
        description="First 3 days free, then $529.99/year"
        price="Save 50%"
        selected={selectedSubscription === '1year'}
        onPress={() => handleSubscriptionSelect('1year')}
      />
      <DefaultButton title={'Try free for 3 Days'} />
      <Text style={styles.info}>After the 3-day trial period you'll be charged ₺274.99 per year unless you</Text>
      <Text style={styles.info}>cancel before the trial expires. Yearly subscription is Auto-Renewable</Text>
      
      <View style={styles.contractContainer}>
        <TouchableOpacity onPress={termsOnTap}>
          <Text style={styles.contract}>Terms</Text>
        </TouchableOpacity>
        <Text style={styles.contract}> • </Text>
        <TouchableOpacity onPress={privacyOnTap}>
          <Text style={styles.contract}>Privacy</Text>
        </TouchableOpacity>
        <Text style={styles.contract}> • </Text>
        <TouchableOpacity onPress={restoreOnTap}>
          <Text style={styles.contract}>Restore</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: context.paddingLow.padding,
    backgroundColor: '#121d17',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: context.getDynamicHeight(47),
  },
  image: {
    margin: context.getDynamicHeight(-3),
    height: context.getDynamicHeight(49),
    width: context.getDynamicWidth(105)
  },
  crossContainer: {
    position: 'absolute',
    right: context.paddingLow.padding,
    width: context.getDynamicWidth(7),  
    height: context.getDynamicWidth(7), 
    justifyContent: 'center',
    alignItems: 'center',
  },
  crossBackground: {
    backgroundColor: theme.colors.secondary,  
    borderRadius: 15,         
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7
  },
  crossImage: {
    width: '50%',
    height: '50%',
    tintColor: '#fff', 
  },
  info:{
    ...theme.textTheme.bodySmall,
    fontSize: 10,
    fontWeight:'300',
    textAlign: 'center',
    opacity: 0.4
  },
  contractContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: context.paddingLow.padding,
    marginBottom: context.paddingLow.padding,
  },
  contract: {
    ...theme.textTheme.labelMedium,
    opacity: 0.6,
    textAlign: 'center',
  },
  title: {
    marginTop: context.getDynamicHeight(-15),
    fontSize: 28,
    color: '#fff',
    fontWeight: '300',
    textAlign: 'start',
    marginBottom: 4,
  },
  titleBold: {
    ...theme.textTheme.headlineLarge,
    fontWeight: '800',
    color: '#fff',
  },
  subtitle: {
    ...theme.textTheme.labelLarge,
    fontWeight: '300',
    opacity: 0.5,
    textAlign: 'start',
    marginBottom: 0,
  },
  scroll: {
    flexGrow: 1,
    paddingVertical: 8,
  },
});

export default PaywallView;

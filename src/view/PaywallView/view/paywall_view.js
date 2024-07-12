import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SubscriptionCard from '../../../components/card/subscription_card';

const PaywallView = () => {
  const [selectedSubscription, setSelectedSubscription] = useState(null);

  return (
    <View style={styles.container}>
      <SubscriptionCard
        title="1 Month"
        description="$2.99/month, auto renewable"
        price=""
        selected={selectedSubscription === '1month'}
        onPress={() => setSelectedSubscription('1month')}
      />
      <SubscriptionCard
        title="1 Year"
        description="First 3 days free, then $529.99/year"
        price="Save 50%"
        selected={selectedSubscription === '1year'}
        onPress={() => setSelectedSubscription('1year')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#111e17',
  },
});

export default PaywallView;
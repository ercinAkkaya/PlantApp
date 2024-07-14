import { useState } from 'react';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';



const usePaywallViewModel = () => {
  const [selectedSubscription, setSelectedSubscription] = useState('');

  const termsOnTap = () => {
    Toast.show({
        type: 'info',
        position: 'bottom',
        text1: 'Terms',
        text2: 'You pressed the Terms link.',
        visibilityTime: 3000,
        autoHide: true,
      });
  };

  const privacyOnTap = () => {
    Toast.show({
        type: 'info',
        position: 'bottom',
        text1: 'Privacy',
        text2: 'You pressed the Privacy link.',
        visibilityTime: 3000,
        autoHide: true,
      });
  };

  const restoreOnTap = () => {
    Toast.show({
        type: 'info',
        position: 'bottom',
        text1: 'Restore',
        text2: 'You pressed the Restore link.',
        visibilityTime: 3000,
        autoHide: true,
      });
  };

  const navigation = useNavigation(); 

  const crossButtonOnTap = () => {
    navigation.navigate('Home'); 
  }

  const handleSubscriptionSelect = (subscriptionType) => {
    setSelectedSubscription(subscriptionType);
  };

  return {
    selectedSubscription,
    termsOnTap,
    privacyOnTap,
    restoreOnTap,
    handleSubscriptionSelect,
    crossButtonOnTap,
  };
};

export default usePaywallViewModel;

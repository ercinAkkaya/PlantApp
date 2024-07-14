import Toast from 'react-native-toast-message';


class GetStartedViewModel {
  constructor(navigate) {
    this.navigate = navigate;
  }

  termOfUseOnTap() {
    Toast.show({
      type: 'info',
      position: 'bottom',
      text1: 'Terms of Use',
      text2: 'You pressed the Terms of Use link.',
      visibilityTime: 3000,
      autoHide: true,
    });
  }

  privacyPolicyOnTap() {
    Toast.show({
      type: 'info',
      position: 'bottom',
      text1: 'Privacy Policy',
      text2: 'You pressed the Privacy Policy link.',
      visibilityTime: 3000,
      autoHide: true,
    });
  }

  getStartedButtonOnTap = () => {
    this.navigate('Onboarding');
  };
}

export default GetStartedViewModel;

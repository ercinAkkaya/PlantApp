// viewmodel/HomePageViewModel.js

export class HomePageViewModel {
    constructor(navigation) {
      this.navigation = navigation; // Pass navigation object to ViewModel
    }
  
    navigateToPaywall() {
      this.navigation.navigate('Paywall'); // Navigate to Paywall screen
    }
  }
  
  export const useHomePageViewModel = (navigation) => {
    return new HomePageViewModel(navigation);
  };
  
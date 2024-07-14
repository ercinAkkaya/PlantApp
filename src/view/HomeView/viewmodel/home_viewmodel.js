export class HomePageViewModel {
  constructor(navigation) {
    this.navigation = navigation; 
  }

  premiumCardOnTap() {
    this.navigation('Paywall');
  }
}

export const useHomePageViewModel = (navigation) => {
  return new HomePageViewModel(navigation);
};

import { useState, useEffect } from 'react';

class OnboardingViewModel {
  constructor(navigate) {
    this.navigate = navigate;
    this.step = 0;
    this.listeners = [];
  }

  addListener = (listener) => {
    this.listeners.push(listener);
  };

  notifyListeners = () => {
    this.listeners.forEach((listener) => listener(this.step));
  };

  handleContinue() {
    if (this.step === 0) {
      this.step = 1;
      this.notifyListeners(); 
    } else if (this.step === 1) {
      this.navigate('Paywall');
    }
  }
}

export default OnboardingViewModel;

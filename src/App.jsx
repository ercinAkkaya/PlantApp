// src/App.jsx
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import PremiumFeatureCard from './components/card/premium_feature_card';
import scanPng from '../assets/png/scan.png';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <PremiumFeatureCard
          imageSource={scanPng} 
          title="Unlimited"
          description="Plant Identify"
        />
        <PremiumFeatureCard
          imageSource={scanPng} 
          title="Faster"
          description="Process"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

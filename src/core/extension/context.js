import { Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');

const getDynamicValue = (percentage) => height * (percentage / 100);

const responsive = {
  height,
  width,
  lowValue: height * 0.012,
  normalValue: height * 0.02,
  mediumValue: height * 0.04,
  highValue: height * 0.07,
  hugeValue: height * 0.1,
  
  getDynamicHeight: (percent) => height * (percent / 100),
  getDynamicWidth: (percent) => width * (percent / 100),

  paddingLow: { padding: height * 0.012 },
  paddingNormal: { padding: height * 0.02 },
  paddingMedium: { padding: height * 0.04 },
  paddingHigh: { padding: height * 0.07 },
  paddingHuge: { padding: height * 0.1 },

  paddingLowVertical: { paddingVertical: height * 0.012 },
  paddingNormalVertical: { paddingVertical: height * 0.02 },
  paddingMediumVertical: { paddingVertical: height * 0.04 },
  paddingHighVertical: { paddingVertical: height * 0.07 },
  paddingHugeVertical: { paddingVertical: height * 0.1 },

  paddingLowHorizontal: { paddingHorizontal: height * 0.012 },
  paddingNormalHorizontal: { paddingHorizontal: height * 0.02 },
  paddingMediumHorizontal: { paddingHorizontal: height * 0.04 },
  paddingHighHorizontal: { paddingHorizontal: height * 0.07 },
  paddingHugeHorizontal: { paddingHorizontal: height * 0.1 },
};

export default responsive;

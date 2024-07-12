import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import context from '../../core/extension/context';
import theme from '../../core/init/theme/theme'; 

const QuestionCard = ({ question, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.cardContainer}>
        <ImageBackground source={{ uri: question.image_uri }} style={styles.card} imageStyle={styles.backgroundImage}>
          <View style={styles.cardContent}>
            <Text style={styles.title}>{question.title}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: context.getDynamicWidth(60),
    marginRight: context.getDynamicWidth(3),
  },
  card: {
    aspectRatio: 1.5,
    justifyContent: 'flex-end',
    borderRadius: 20,
    overflow: 'hidden',
  },
  backgroundImage: {
    borderRadius: 8,
  },
  cardContent: {
    height: context.getDynamicHeight(8), 
    justifyContent: 'center', 
    paddingHorizontal: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    ...theme.textTheme.labelLarge,
  },
});

export default QuestionCard;
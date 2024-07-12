import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Alert, View } from 'react-native';
import QuestionCard from './components/card/question_card';

const API_URL = 'https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions'; // Replace with your actual API endpoint

const App = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setQuestions(data); // Assuming data is a list of questions
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handlePress = (question) => {
    Alert.alert('Card Pressed', 'You pressed: ${question.subtitle}');
  };

  return (
    <ScrollView horizontal pagingEnabled contentContainerStyle={styles.container}>
      <View style={styles.cardList}>
        {questions.map((question, index) => (
          <QuestionCard key={question.id} question={question} onPress={() => handlePress(question)} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  cardList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default App;
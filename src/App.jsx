import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import CategoryCard from './components/card/category_card';

const API_URL = 'https://dummy-api-jtg6bessta-ey.a.run.app/getCategories';

const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setCategories(data.data); // Assuming data is structured as { data: [...] }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderCategoryCards = () => {
    return categories.map(category => (
      <CategoryCard key={category.id} category={category} />
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cardContainer}>
        {renderCategoryCards()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default App;

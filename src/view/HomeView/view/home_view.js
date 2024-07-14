import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../../../components/bar/search_bar';
import PremiumCard from '../../../components/card/premium_card';
import QuestionCard from '../../../components/card/question_card';
import CategoryCard from '../../../components/card/category_card';
import context from '../../../core/extension/context';
import BottomNavbar from '../../../components/bar/bottom_navbar';
import theme from '../../../core/init/theme/theme';
import { HomePageViewModel } from '../viewmodel/home_viewmodel';

const API_URL_CATEGORY =
  'https://dummy-api-jtg6bessta-ey.a.run.app/getCategories';
const API_URL_QUESTIONS =
  'https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions';

const HomePageView = () => {
  const navigation = useNavigation();
  const viewModel = new HomePageViewModel(navigation.navigate);
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCategory = await fetch(API_URL_CATEGORY);
        const dataCategory = await responseCategory.json();
        console.log('Fetched Categories:', dataCategory);
        setCategories(dataCategory.data);

        const responseQuestions = await fetch(API_URL_QUESTIONS);
        const dataQuestions = await responseQuestions.json();
        console.log('Fetched Questions:', dataQuestions);
        setQuestions(dataQuestions);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePress = question => {
    Alert.alert('Card Pressed', `You pressed: ${question.subtitle}`);
  };

  const renderCategoryCards = () => {
    return categories.map(category => (
      <CategoryCard key={category.id} category={category} />
    ));
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Text style={styles.smallTitle}>Hi, plant lover!</Text>
        <Text style={styles.title}>Good Afternoon!⛅</Text>
        <View style={styles.headerContainer}>
          <Image
            source={require('../../../../assets/png/home-plant-1.png')}
            style={[styles.backgroundImage, { left: 0 }]}
          />
          <SearchBar style={styles.searchBar} />
          <Image
            source={require('../../../../assets/png/home-plant-2.png')}
            style={[styles.backgroundImage, { right: 0 }]}
          />
        </View>
        <PremiumCard onPress={viewModel.premiumCardOnTap.bind(viewModel)} />
        <Text style={styles.bodyTitle}>Get Started</Text>
        <ScrollView
          horizontal
          pagingEnabled
          contentContainerStyle={styles.questionScroll}>
          <View style={styles.cardList}>
            {questions && questions.length > 0 ? (
              questions.map(question => (
                <QuestionCard
                  key={question.id}
                  question={question}
                  onPress={() => handlePress(question)}
                />
              ))
            ) : (
              <Text>No questions available</Text>
            )}
          </View>
        </ScrollView>
        <View style={styles.scrollContainer}>
          <ScrollView
            vertical
            contentContainerStyle={styles.categoryScroll}>
            <View style={styles.categoryCard}>
              {categories.length > 0 ? (
                renderCategoryCards()
              ) : (
                <Text>No categories available</Text>
              )}
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <BottomNavbar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  smallTitle: {

    ...theme.textTheme.labelLarge,
    color: '#000',
    fontWeight: '400',
    textAlign: 'left',
    padding: context.paddingLow.padding,
  },
  container: {
    backgroundColor: theme.colors.primaryBackground,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    color: '#000',
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'left',
    paddingLeft: context.paddingLow.padding,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: context.paddingLow.padding,
  },
  backgroundImage: {
    position: 'absolute',
    width: context.getDynamicWidth(10),
    height: context.getDynamicHeight(6),
    resizeMode: 'cover',
    opacity: 0.5,
  },
  searchBar: {
    zIndex: 1,
    flex: 1,
    backgroundColor: 'transparent',
  },
  bodyContainer: {
    flex: 1,
    paddingHorizontal: context.paddingLow.padding,
  },
  bodyTitle: {
    color: '#000',
    fontSize: 24,
    fontWeight: '600',
    marginVertical: context.paddingLow.padding,
  },
  cardList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  questionScroll: {
    paddingHorizontal: context.paddingLow.padding,
  },
  scrollContainer: {
    flex: 10,
  },
  categoryScroll: {
    flexGrow: 1,
    paddingVertical: context.paddingLow.padding,
  },
  image: {
    width: context.getDynamicWidth(5),
    height: context.getDynamicHeight(5),
    opacity: 0.5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bottomContainer: {
    height: context.getDynamicHeight(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});

export default HomePageView;

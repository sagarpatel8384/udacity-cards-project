import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import CreateDeck from './CreateDeck';
import AddQuestion from './AddQuestion';
import StartQuiz from './StartQuiz';
import Deck from './Deck';

export default MainNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      title: 'Create New Deck'
    },
  },
  Deck: {
    screen: Deck,
  },
  AddQuestion: {
    screen: AddQuestion,
  },
  StartQuiz: {
    screen: StartQuiz,
    navigationOptions: {
      title: 'Quiz'
    },
  },
});


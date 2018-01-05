import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import CreateDeck from './CreateDeck';

export default MainNavigator = StackNavigator({
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      title: 'Create New Deck'
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
});


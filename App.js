import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import deckReducer from './src/reducers';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import MainNavigator from './src/components/MainNavigator';
import CardsStatusBar from './src/components/CardsStatusBar';

const rootReducer = combineReducers({ deck: deckReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <CardsStatusBar />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
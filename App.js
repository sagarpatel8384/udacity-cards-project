import React from 'react';
import { View, StyleSheet } from 'react-native';
import reducers from './src/reducers';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import MainNavigator from './src/components/MainNavigator';
import CardsStatusBar from './src/components/CardsStatusBar';

const store = createStore(combineReducers({reducers}));

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
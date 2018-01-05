import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Constants } from 'expo';

const CardsStatusBar = () => (
  <View style={styles.container}>
    <StatusBar translucent barStyle='dark-content'/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: Constants.statusBarHeight,
  }
});

export default CardsStatusBar;


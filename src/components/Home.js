import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BottomButtons from './BottomButtons';
import { backgroundColor } from '../util/colors';

class Home extends Component {
 render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <BottomButtons navigation={navigation} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  }
});

export default Home;
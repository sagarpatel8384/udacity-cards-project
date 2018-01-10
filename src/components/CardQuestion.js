import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { white } from '../util/colors';

class CardQuestion extends Component {
  render() {
    const { showingAnswer } = this.props;
    const { question, answer } = this.props.question;

    return (
      <View style={styles.container}>
        { !showingAnswer ? <Text>{question}</Text> : <Text>{answer}</Text> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    height: 100,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default CardQuestion;
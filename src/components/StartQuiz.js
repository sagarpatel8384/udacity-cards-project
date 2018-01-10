import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CardQuestion from './CardQuestion';
import {backgroundColor, pink, white} from '../util/colors';

class StartQuiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCardIndex: 0,
      showingAnswer: false,
      score: 0,
    };
  }

  correct = () => {
    this.setState(prevState => ({
      score: prevState.score + 1
    }));
    this.loadNext();
  };

  loadNext = () => {
    this.setState(prevState => ({
      currentCardIndex: prevState.currentCardIndex + 1
    }));
  };

  reset = () => {
    this.setState({ currentCardIndex: 0, score: 0 });
  };

  showAnswer = () => {
    this.setState(prevState => ({
      showingAnswer: !prevState.showingAnswer
    }));
  };

  render() {
    const { questions } = this.props.navigation.state.params;
    const { currentCardIndex, showingAnswer } = this.state;
    const currentCardsNum = currentCardIndex + 1;

    if (this.state.currentCardIndex === questions.length) {
      return (
        <View style={styles.container}>
          <View style={styles.buttonsContainer}>
            <Text style={styles.completeMsg}>You got {`${this.state.score} out of ${questions.length} correct.`}</Text>
            <TouchableOpacity style={styles.resetBtn} onPress={this.reset}>
              <Text style={styles.resetBtnText}>Play Again</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.metadataContainer}>
            <Text style={styles.metadata}>{`${currentCardsNum} / ${questions.length}`}</Text>
          </View>
          <View style={styles.questionContainer}>
            <CardQuestion question={questions[currentCardIndex]} showingAnswer={showingAnswer}/>
            <TouchableOpacity onPress={this.showAnswer}>
              <Text style={styles.answerBtnText}>Answer</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.correctBtn} onPress={this.correct}>
              <Text>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.incorrectBtn} onPress={this.loadNext}>
              <Text>Incorrect</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: backgroundColor,
    justifyContent: 'center',
  },
  metadataContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 15,
  },
  questionContainer: {
    flex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    flex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  metadata: {
    color: white,
    fontSize: 12,
  },
  answerBtnText: {
    color: pink,
  },
  resetBtnText: {
    color: pink,
  },
  completeMsg: {
    color: white,
    fontSize: 24,
  },
  resetBtn: {
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 3,
    backgroundColor: white,
    width: 200,
    justifyContent:"center",
    alignItems:'center',
  },
  correctBtn: {
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 3,
    backgroundColor: white,
    width: 200,
    justifyContent:"center",
    alignItems:'center',
  },
  incorrectBtn: {
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 3,
    borderWidth: 0.5,
    backgroundColor: pink,
    width: 200,
    justifyContent:"center",
    alignItems:'center',
  },
});

export default StartQuiz;
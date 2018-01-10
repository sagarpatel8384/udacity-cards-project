import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { pink, white, backgroundColor } from '../util/colors';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

function mapStateToProps(state) { return { state }; }
function mapDispatchToProps(dispatch) { return bindActionCreators(Actions, dispatch); }

class Deck extends Component {
  componentWillMount() {
    const { getDeck, loadingDeck } = this.props;
    const { title } = this.props.navigation.state.params;
    loadingDeck();
    getDeck(title);
  }

  onNavBack = () => {
    const { getDeck, loadingDeck } = this.props;
    const { title } = this.props.navigation.state.params;
    loadingDeck();
    getDeck(title);
  };

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
    headerTitleStyle : { textAlign: 'center', alignSelf:'center' },
  });

  render() {
    const { title } = this.props.navigation.state.params;
    const { navigation } = this.props;
    let contents;

    if (this.props.state.deck.loadingDeck === false) {
      contents =  (
          <View>
            <Text style={styles.deckTitle}>{title}</Text>
            <Text style={styles.deckCount}>
              {
                this.props.state.deck.questions.length !== 1
                  ? `${this.props.state.deck.questions.length} Questions`
                  : `${this.props.state.deck.questions.length} Questions`
              }
            </Text>
            <TouchableOpacity style={styles.addCardBtn} onPress={() => navigation.navigate('AddQuestion', { title, questions: this.props.state.deck.questions, onNavBack: this.onNavBack })}>
              <Text stytles={styles.btnText}>Add Question</Text>
            </TouchableOpacity>
            {
              this.props.state.deck.questions.length > 0 &&
              <TouchableOpacity style={styles.startQuizBtn} onPress={() => navigation.navigate('StartQuiz', { questions: this.props.state.deck.questions })}>
                <Text>Start Quiz</Text>
              </TouchableOpacity>
            }
          </View>

      );
    } else {
      contents = <Text style={styles.deckTitle}>Loading...</Text>;
    }

    return (
      <View style={styles.container}>
        {contents}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deckTitle: {
    fontSize: 24,
    color: white,
  },
  deckCount: {
    fontSize: 18,
    color: pink
  },
  addCardBtn: {
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 3,
    borderWidth: 0.5,
    backgroundColor: white,
    width: 200,
    justifyContent:"center",
    alignItems:'center',
  },
  startQuizBtn: {
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 3,
    width: 200,
    backgroundColor: pink,
    justifyContent:"center",
    alignItems:'center',
  },
  btnText: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Deck);

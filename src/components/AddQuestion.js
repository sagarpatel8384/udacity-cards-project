import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { white, pink, backgroundColor } from '../util/colors';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

function mapStateToProps(state) { return { state }; }
function mapDispatchToProps(dispatch) { return bindActionCreators(Actions, dispatch); }

class AddQuestion extends Component {
  state = {
    question: null,
    answer: null,
  };

  addQuestion = () => {
    const { navigation } = this.props;
    const {title, questions, onNavBack} = navigation.state.params;
    const { addCardToDeck } = this.props;
    const card = this.state;
    addCardToDeck(title, questions, card);
    onNavBack();
    navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Add Question</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(question) => this.setState({question})}
          placeholder='Question'
          value={this.state.text}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(answer) => this.setState({answer})}
          placeholder='Answer'
          value={this.state.text}
        />
        <TouchableOpacity style={styles.submitBtn} onPress={this.addQuestion}>
          <Text style={styles.submitBtnText}>Submit</Text>
        </TouchableOpacity>
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
  title: {
    fontSize: 24,
    color: white,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: white,
    width: 200,
    marginVertical: 5,
    padding: 5,
  },
  submitBtn: {
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 3,
    width: 200,
    backgroundColor: pink,
    justifyContent:"center",
    alignItems:'center',
  },
  submitBtnText: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);

import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { white, pink, backgroundColor } from '../util/colors';

function mapStateToProps(state) { return { decks: state.decks }; }
function mapDispatchToProps(dispatch) { return bindActionCreators(Actions, dispatch); }

class CreateDeck extends Component {
  state = {
    deckTitle: '',
  };

  render() {
    const { createDeck } = this.props;

    return (
      <View style={styles.container} >
        <Text>{this.props.decks}</Text>

        <TextInput
          placeholder='Enter Deck Name'
          placeholderTextColor={white}
          style={styles.textInput}
          onChangeText={(text) => this.setState({deckTitle: text})}
          value={this.state.deckTitle}
        />
        <View style={styles.createBtnContainer}>
          <TouchableOpacity style={styles.createBtn} onPress={() => createDeck(this.state.deckTitle)}>
            <Text>Create Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    justifyContent: 'center',
  },
  text: {
    color: white
  },
  textInput: {
    borderColor: pink,
    borderWidth: 1,
    height: 40,
    color: white,
    marginRight: 15,
    marginLeft: 15,
    paddingLeft: 10,
  },
  createBtnContainer: {
    backgroundColor: pink,
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  createBtn: {
    alignItems: 'center'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeck);

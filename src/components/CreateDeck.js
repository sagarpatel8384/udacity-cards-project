import React, { Component } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { white, pink, backgroundColor } from '../util/colors';

function mapStateToProps(state) { return { state }; }
function mapDispatchToProps(dispatch) { return bindActionCreators(Actions, dispatch); }

class CreateDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckTitle: '',
    };
  }

  submit = () => {
    const { saveDeckTitle, navigation } = this.props;
    const { onNavBack } = this.props.navigation.state.params;
    saveDeckTitle(this.state.deckTitle);
    onNavBack();
    navigation.goBack();
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <TextInput
          placeholder='Enter Deck Name'
          placeholderTextColor={white}
          style={styles.textInput}
          onChangeText={(text) => this.setState({deckTitle: text})}
          value={this.state.deckTitle}
          autoFocus
        />
        <View style={styles.createBtnContainer}>
          <TouchableOpacity style={styles.createBtn} onPress={this.submit}>
            <Text>Create Deck</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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

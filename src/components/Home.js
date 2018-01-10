import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DeckListView from './DeckListView';
import * as Actions from '../actions';
import BottomButtons from './BottomButtons';
import { backgroundColor } from '../util/colors';

function mapStateToProps(state) { return { state }; }
function mapDispatchToProps(dispatch) { return bindActionCreators(Actions, dispatch); }

class Home extends Component {
  componentWillMount() {
    const { loadingDecks, getDecks } = this.props;
    loadingDecks();
    getDecks();
  }

  componentDidUpdate() {
    const { loadingDecks, getDecks } = this.props;
    getDecks();
  }

 render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        {
          this.props.state.deck.loadingDecks === false &&
          <DeckListView deckData={this.props.state.deck} navigation={navigation} />
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
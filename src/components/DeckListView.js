import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { white, grey } from '../util/colors';

class DeckListView extends Component {
  heading = (item) => {
    const { navigation, onNavBack } = this.props;
    if (item.heading !== undefined || item.questions !== undefined) {
      return (
        <View style={styles.deckPreview}>
          <TouchableOpacity onPress={() => navigation.navigate('Deck', { title: item.title, onNavBack: onNavBack })}>
            <Text style={styles.heading}>{item.title}</Text>
            <Text style={styles.subHeading}>
              {
                (item.questions === undefined || item.questions.length !== 1)  ? `${item.questions.length} Questions` : `${item.questions.length} Questions`
              }
            </Text>
          </TouchableOpacity>
        </View>
      )
    }

    return null;
  };

  render() {
    return (
      <View>
        {
          this.props.deckData.retrievedDecks &&
          <FlatList
            data={this.props.deckData.decks}
            keyExtractor={(item, index) => index }
            renderItem={({item}) => {
              return this.heading(item);
            }}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deckPreview: {
    backgroundColor: white,
    borderRadius: 3,
    height: 50,
    margin: 10,
    padding: 10,
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    fontWeight: '700',
  },
  subHeading: {
    color: grey
  },
});

export default DeckListView;

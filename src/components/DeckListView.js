import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { white, grey } from '../util/colors';

const DeckListView = (props) => {
  const { navigation } = props;

  return (
    <View>
      {
        props.deckData.retrievedDecks &&
        <FlatList
          data={props.deckData.decks}
          keyExtractor={(item, index) => index }
          renderItem={({item}) => {
            return (
              <View style={styles.deckPreview}>
                <TouchableOpacity onPress={() => navigation.navigate('Deck', { title: item.title })}>
                  <Text style={styles.heading}>{item.title}</Text>
                  <Text style={styles.subHeading}>
                    {
                      item.questions.length !== 1 ? `${item.questions.length} Questions` : `${item.questions.length} Questions`
                    }
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      }
    </View>
  );
};

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

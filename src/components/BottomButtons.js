import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { white, pink } from '../util/colors';

const BottomButtons = ({navigation}) => (
  <View style={styles.bottomBtnContainer}>
    <TouchableOpacity style={styles.bottomBtn} onPress={() => navigation.navigate('CreateDeck')}>
      <Feather name="file-plus" style={styles.bottomBtnIcon} size={32} />
      <Text style={styles.bottomBtnText}>Create Deck</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  bottomBtnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: pink,
    padding: 15,
  },
  bottomBtnIcon: {
    color: white,
  },
  bottomBtnText: {
    color: white,
    fontSize: 24,
    marginLeft: 5,
  },
});

export default BottomButtons;

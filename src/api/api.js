import { AsyncStorage } from 'react-native';

export function saveDeckTitle(deckTitle) {
  return AsyncStorage.mergeItem(deckTitle, JSON.stringify({
    title: deckTitle,
    questions: [],
  }));
}

export function addCardToDeck(deck, question) {
  deck.questions.push(question);
  return AsyncStorage.mergeItem(deck.title, JSON.stringify(deck));
}


export function getDecks() {
  return AsyncStorage.getAllKeys().then(keys => {
    return AsyncStorage.multiGet(keys);
  });
}

export function getDeck(title) {
  return AsyncStorage.getItem(title);
}
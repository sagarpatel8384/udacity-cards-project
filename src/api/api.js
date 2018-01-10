import { AsyncStorage } from 'react-native';

export function saveDeckTitle(deckTitle) {
  const deck = {
    title: deckTitle,
    questions: [],
  };

  return AsyncStorage.setItem(deckTitle, JSON.stringify(deck));
}

export function addCardToDeck(title, questions, question) {
  questions.push(question);
  const deckDelta = { questions };
  return AsyncStorage.mergeItem(title, JSON.stringify(deckDelta));
}


export function getDecks() {
  return AsyncStorage.getAllKeys().then(keys => {
    return AsyncStorage.multiGet(keys);
  });
}

export function getDeck(title) {
  return AsyncStorage.getItem(title);
}
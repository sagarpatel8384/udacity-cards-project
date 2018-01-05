import { CREATE_DECK } from './actionTypes';

export function createDeck(deckTitle) {
  return {
    type: 'CREATE_DECK',
    deckTitle,
    cards: [],
  };
}
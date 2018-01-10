import { SAVE_DECK_TITLE, GET_DECK, GET_DECKS, LOADING_DECKS } from './actionTypes';
import * as api from '../api/api';

export function saveDeckTitle(title) {
  const request = api.saveDeckTitle(title);

  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: SAVE_DECK_TITLE,
        title,
        questions: [],
      });
    });
  };
}

export function addCardToDeck(title, card) {
  const request = api.getDeck(title);

  return () => {
    request.then((response) => {
      const deck = JSON.parse(response);
      api.addCardToDeck(deck, card);
    });
  };
}

export function loadingDecks() {
  return {
    type: LOADING_DECKS,
    loadingDecks: true,
  }
}

export function getDecks() {
  const request = api.getDecks();

  return (dispatch) => {
    request.then((response) => {
      const decks = response.map(function(data) {
        const deckData = JSON.parse(data[1]);
        return { title: deckData.title, questions: deckData.questions }
      });
      dispatch({
        type: GET_DECKS,
        decks,
        retrievedDecks: true,
        loadingDecks: false,
      });
    });
  };
}

export function getDeck(title) {
  const request = api.getDeck(title);

  return (dispatch) => {
    request.then((response) => {
      const deck = JSON.parse(response);
      dispatch({
        type: GET_DECK,
        title: deck.title,
        questions: deck.questions,
        retrievedDeck: true,
      });
    });
  };
}
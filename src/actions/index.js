import { SAVE_DECK_TITLE, GET_DECK, GET_DECKS, LOADING_DECKS, LOADING_DECK, ADD_CARD_TO_DECK } from './actionTypes';
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

export function addCardToDeck(title, questions, card) {
  const request = api.addCardToDeck(title, questions, card);

  return (dispatch) => {
    request.then((response) => {
      const deck = JSON.parse(response);
      dispatch({
        type: ADD_CARD_TO_DECK,
        deckCount: questions.length + 1,
      });
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

export function loadingDeck() {
  return {
    type: LOADING_DECK,
    loadingDeck: true,
  }
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
        loadingDeck: false,
      });
    });
  };
}
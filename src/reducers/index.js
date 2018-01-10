import { SAVE_DECK_TITLE, GET_DECK, GET_DECKS, LOADING_DECKS } from '../actions/actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case SAVE_DECK_TITLE :
      return {
        ...state,
        title: action.title,
        questions: action.questions
      };
    case GET_DECK :
      return {
        ...state,
        title: action.title,
        questions: action.questions,
        retrievedDeck: action.retrievedDeck,
      };
    case GET_DECKS :
      return {
        ...state,
        decks: action.decks,
        retrievedDecks: action.retrievedDecks,
        loadingDecks: action.loadingDecks,
      };
    case LOADING_DECKS :
      return {
        ...state,
        decks: action.decks,
        loadingDecks: action.loadingDecks,
      };
    default :
      return state;
  }
}
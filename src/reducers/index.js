import { SAVE_DECK_TITLE, GET_DECK, GET_DECKS, LOADING_DECKS, LOADING_DECK, ADD_CARD_TO_DECK } from '../actions/actionTypes';

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
        loadingDeck: action.loadingDeck,
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
      loadingDecks: action.loadingDecks,
    };
    case LOADING_DECK :
      return {
        ...state,
        loadingDeck: action.loadingDeck,
      };
    case ADD_CARD_TO_DECK :
      return {
        ...state,
        deckCount: action.deckCount,
      };
    default :
      return state;
  }
}
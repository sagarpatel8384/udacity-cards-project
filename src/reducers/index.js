import { CREATE_DECK } from '../actions/actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case CREATE_DECK :
      return {
        ...state,
        deckTitle: action.deckTitle,
        cards: action.cards,
      };
    default :
      return state;
  }
}
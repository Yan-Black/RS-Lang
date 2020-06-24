import { Card } from 'components/Games/EnglishPuzzle/GameBlock/types';
import { ActionPayload } from './actions';

interface InitialState {
  cardsCollection: Array<Card[]>;
}

const initialState = <InitialState>{
  cardsCollection: [],
};

const collectionReducer = (state = initialState, action: ActionPayload): InitialState => {
  switch (action.type) {
    case 'UPDATE_COLLECTION':
      return { ...state, cardsCollection: state.cardsCollection.concat([action.payload]) };
    case 'REMOVE_COLLECTION':
      return { ...state, cardsCollection: [] };
    default: return state;
  }
};

export default collectionReducer;

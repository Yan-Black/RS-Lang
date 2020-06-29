import { ActionCard, InitialStateCardsCollection } from '../Models';

const initialState = <InitialStateCardsCollection>{
  cardsCollection: [],
};

const collectionReducer = (
  state = initialState, action: ActionCard,
): InitialStateCardsCollection => {
  switch (action.type) {
    case 'UPDATE_COLLECTION':
      return { ...state, cardsCollection: state.cardsCollection.concat([action.payload]) };
    case 'REMOVE_COLLECTION':
      return { ...state, cardsCollection: [] };
    default: return state;
  }
};

export default collectionReducer;

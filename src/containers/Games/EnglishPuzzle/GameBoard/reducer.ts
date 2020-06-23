import { ActioPayload } from './actions';

const initialState = {
  cardsCollection: [],
};

const collectionReducer = (state = initialState, action: ActioPayload) => {
  switch (action.type) {
    case 'UPDATE_COLLECTION':
      return { ...state, cardsCollection: state.cardsCollection.concat([action.payload]) };
    case 'REMOVE_COLLECTION':
      return { ...state, cardsCollection: [] };
    default: return state;
  }
};

export default collectionReducer;

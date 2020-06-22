import { createStore, combineReducers } from 'redux';

// import appReducer from '../containers/App/reducer';
import pageReducer from '../containers/Games/AudioCall/reducer';

const rootReducer = combineReducers({
  audioCallPage: pageReducer,
});

const store = createStore(rootReducer);

store.subscribe(() => {
  // console.log(store.getState());
});

export default store;

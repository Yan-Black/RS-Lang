import thunk from 'redux-thunk';
import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';

// import appReducer from '../containers/App/reducer';
import {
  pageReducer, levelReducer, roundReducer, currWordsReducer,
} from '../containers/Games/AudioCall/reducer';

const rootReducer = combineReducers({
  audioCallPage: pageReducer,
  audioCallLevel: levelReducer,
  audioCallRound: roundReducer,
  audioCallCurrWords: currWordsReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

// store.subscribe(() => {
//   console.log(store.getState());
// });

export default store;

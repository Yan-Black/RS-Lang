import thunk from 'redux-thunk';
import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';

import {
  pageReducer, levelReducer, roundReducer,
  currWordsReducer, answerReducer, statisticReducer, modalReducer,
} from 'containers/Games/AudioCall/reducer';

const rootReducer = combineReducers({
  audioCallPage: pageReducer,
  audioCallLevel: levelReducer,
  audioCallRound: roundReducer,
  audioCallCurrWords: currWordsReducer,
  audioCallAnswer: answerReducer,
  audioCallStatistic: statisticReducer,
  audioCallModal: modalReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

store.subscribe(() => {
  // console.log(store.getState());
});

export default store;

import thunk from 'redux-thunk';
import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import groupReducer from 'containers/Games/SpeakIt/ControlLevel/reducer';
import fetchReducer from 'containers/Games/SpeakIt/FetchGroup/reducer';
import cardsReducer from '../containers/Games/SpeakIt/CardsGroup/reducer';
import startGameReducer from '../containers/Games/SpeakIt/ControlButtons/reducer';

const rootReducer = combineReducers({
  speakItControl: groupReducer,
  speakItFetch: fetchReducer,
  speakItWord: cardsReducer,
  speakItButtons: startGameReducer,
});

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
));

export default store;

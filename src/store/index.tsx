import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import appReducer from '../containers/App/reducer';
import btnsReducer from '../containers/Games/EnglishPuzzle/HintButtons/reducer';
import wordsReducer from '../containers/Games/EnglishPuzzle/SettingsBlock/wordsReducer';
import { loaderReducer } from '../containers/Games/EnglishPuzzle/StartWords/reducer';

const rootReducer = combineReducers({
  app: appReducer,
  engPuzzleBtns: btnsReducer,
  fetchedWords: wordsReducer,
  loading: loaderReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

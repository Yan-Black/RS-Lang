import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import appReducer from '../containers/App/reducer';
import btnsReducer from '../containers/Games/EnglishPuzzle/HintButtons/reducer';
import wordsReducer from '../containers/Games/EnglishPuzzle/SettingsBlock/wordsReducer';
import loaderReducer from '../containers/Games/EnglishPuzzle/StartWords/reducer';
import activeIndexReducer from '../containers/Games/EnglishPuzzle/StartPage/reducer';
import helpBtnsReducer from '../containers/Games/EnglishPuzzle/GameBoard/HelpButtons/reducer';
import collectionReducer from '../containers/Games/EnglishPuzzle/GameBoard/reducer';

const rootReducer = combineReducers({
  app: appReducer,
  engPuzzleBtns: btnsReducer,
  engPuzzleControlBtns: helpBtnsReducer,
  engPuzzleActiveIdx: activeIndexReducer,
  engPuzzleCards: collectionReducer,
  fetchedWords: wordsReducer,
  loading: loaderReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

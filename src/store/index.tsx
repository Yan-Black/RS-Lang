import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import pageReducer from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/pageReducer';
import groupReducer from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/groupReducer';
import offsetXReducer from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/offsetReducer';
import solvedReducer from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/solvedReducer';
import dontKnowReducer from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Results/dontKnowReduser';
import knowReducer from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Results/knowReducer';
import openResultsReducer from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Results/openResultsReducer';
import statisticReducer from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Statistic/statisticReducer';
import statisticInfoReducer from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Statistic/statisticInfoReducer';
import appReducer from '../containers/App/reducer';
import btnsReducer from '../containers/Games/EnglishPuzzle/HeaderBlock/HintButtons/btnsReducer';
import wordsReducer from '../containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/wordsReducer';
import loaderReducer from '../containers/Games/EnglishPuzzle/GameBlock/GameBoard/Loader/loaderReducer';
import activeIndexReducer from '../containers/Games/EnglishPuzzle/GameIndex/activeIndexReducer';
import helpBtnsReducer from '../containers/Games/EnglishPuzzle/GameBlock/GameBoard/HelpButtons/reducer';
import collectionReducer from '../containers/Games/EnglishPuzzle/GameBlock/GameBoard/collectionReducer';

const rootReducer = combineReducers({
  app: appReducer,
  engPuzzleBtns: btnsReducer,
  engPuzzleControlBtns: helpBtnsReducer,
  engPuzzleActiveIdx: activeIndexReducer,
  engPuzzleCards: collectionReducer,
  engPuzzlePage: pageReducer,
  engPuzzleGroup: groupReducer,
  engPuzzleXOffset: offsetXReducer,
  engPuzzleSolved: solvedReducer,
  engPuzzleFailed: dontKnowReducer,
  engPuzzleSuccess: knowReducer,
  engPuzzleResults: openResultsReducer,
  engPuzzleStatistic: statisticReducer,
  engPuzzleStatisticInfo: statisticInfoReducer,
  fetchedWords: wordsReducer,
  loading: loaderReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

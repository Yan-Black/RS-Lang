import thunk from 'redux-thunk';
import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';

import pageNumberReducer from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/pageReducer';
import groupReducer from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/groupReducer';
import offsetXReducer from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/offsetReducer';
import solvedReducer from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/solvedReducer';
import dontKnowReducer from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Results/dontKnowReduser';
import knowReducer from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Results/knowReducer';
import openResultsReducer from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Results/openResultsReducer';
import statisticPageReducer from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Statistic/statisticReducer';
import statisticInfoReducer from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Statistic/statisticInfoReducer';
import startPageReducer from 'containers/Games/EnglishPuzzle/StartPage/startPageReducer';
import {
  pageReducer, levelReducer, roundReducer,
  currWordsReducer, answerReducer, statisticReducer, modalReducer,
} from 'containers/Games/AudioCall/reducer';
import appReducer from '../containers/App/reducer';
import btnsReducer from '../containers/Games/EnglishPuzzle/HeaderBlock/HintButtons/btnsReducer';
import wordsReducer from '../containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/wordsReducer';
import loaderReducer from '../containers/Games/EnglishPuzzle/GameBlock/GameBoard/Loader/loaderReducer';
import activeIndexReducer from '../containers/Games/EnglishPuzzle/GameController/activeIndexReducer';
import helpBtnsReducer from '../containers/Games/EnglishPuzzle/GameBlock/GameBoard/HelpButtons/reducer';
import collectionReducer from '../containers/Games/EnglishPuzzle/GameBlock/GameBoard/collectionReducer';

const rootReducer = combineReducers({
  app: appReducer,
  audioCallPage: pageReducer,
  audioCallLevel: levelReducer,
  audioCallRound: roundReducer,
  audioCallCurrWords: currWordsReducer,
  audioCallAnswer: answerReducer,
  audioCallStatistic: statisticReducer,
  audioCallModal: modalReducer,
  engPuzzleBtns: btnsReducer,
  engPuzzleControlBtns: helpBtnsReducer,
  engPuzzleActiveIdx: activeIndexReducer,
  engPuzzleCards: collectionReducer,
  engPuzzlePage: pageNumberReducer,
  engPuzzleGroup: groupReducer,
  engPuzzleXOffset: offsetXReducer,
  engPuzzleSolved: solvedReducer,
  engPuzzleFailed: dontKnowReducer,
  engPuzzleSuccess: knowReducer,
  engPuzzleResults: openResultsReducer,
  engPuzzleStatistic: statisticPageReducer,
  engPuzzleStatisticInfo: statisticInfoReducer,
  engPuzzleFetchedWords: wordsReducer,
  engPuzzleLoading: loaderReducer,
  engPuzzleStartPage: startPageReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;

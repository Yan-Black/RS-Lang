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
import authTokenReducer from 'containers/Authorisation/authReducer';
import authErrorsReducer from 'containers/Authorisation/authErrorsReducer';
import { dictionaryReducer } from 'containers/Dictionary/reducer';
import logReducer from 'containers/Authorisation/logReducer';
import modalMainReducer from 'containers/Main/modalMainReducer';
import modalInfoReducer from 'containers/Main/modalInfoReducer';
import cardsWordsAmountReducer from 'containers/Main/cardsWordsAmountReducer';
import settingsOpenReducer from 'containers/Main/settingsOpenReducer';
import themeReducer from 'containers/Main/themeReducer';
import settingsEnabledReducer from 'containers/Main/settingsEnabledReducer';
import userNameReducer from 'containers/Authorisation/userNameReducer';
import mainLangReducer from 'containers/Main/mainLangReducer';
import regFormReducer from 'containers/Authorisation/regFormReducer';
import logFormReducer from 'containers/Authorisation/logFormReducer';
import studyModesReducer from 'containers/Main/studyModesReducer.';
import { trainingReducer, trainingStatisticReducer } from 'containers/TrainingCard/reducers';
import appReducer from '../containers/App/reducer';
import btnsReducer from '../containers/Games/EnglishPuzzle/HeaderBlock/HintButtons/btnsReducer';
import wordsReducer from '../containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/wordsReducer';
import loaderReducer from '../containers/Games/EnglishPuzzle/GameBlock/GameBoard/Loader/loaderReducer';
import activeIndexReducer from '../containers/Games/EnglishPuzzle/GameController/activeIndexReducer';
import helpBtnsReducer from '../containers/Games/EnglishPuzzle/GameBlock/GameBoard/HelpButtons/reducer';
import collectionReducer from '../containers/Games/EnglishPuzzle/GameBlock/GameBoard/collectionReducer';
import levelControlReducer from '../containers/Games/SpeakIt/ControlLevel/reducer';
import fetchReducer from '../containers/Games/SpeakIt/FetchGroup/reducer';
import cardsReducer from '../containers/Games/SpeakIt/CardsGroup/reducer';
import startGameReducer from '../containers/Games/SpeakIt/ControlButtons/reducer';

const rootReducer = combineReducers({
  app: appReducer,
  authToken: authTokenReducer,
  authErrors: authErrorsReducer,
  authLog: logReducer,
  authName: userNameReducer,
  mainModal: modalMainReducer,
  mainModalInfo: modalInfoReducer,
  mainTheme: themeReducer,
  mainCardsWords: cardsWordsAmountReducer,
  mainSettings: settingsOpenReducer,
  mainSetEnabled: settingsEnabledReducer,
  mainStudyMode: studyModesReducer,
  mainLang: mainLangReducer,
  mainLog: logFormReducer,
  mainReg: regFormReducer,
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
  dictionaryState: dictionaryReducer,
  speakItControl: levelControlReducer,
  speakItFetch: fetchReducer,
  speakItWord: cardsReducer,
  speakItButtons: startGameReducer,
  training: trainingReducer,
  trainingStatistic: trainingStatisticReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;

export interface State {
  trainingSettings;
  trainingStatistic;
  training;
  app;
  authToken;
  authErrors;
  authLog;
  authName;
  mainModal;
  mainModalInfo;
  mainTheme;
  mainSettings;
  mainSetEnabled;
  mainCardsWords;
  mainLang;
  mainReg;
  mainLog;
  mainStudyMode;
  audioCallPage;
  audioCallLevel;
  audioCallRound;
  audioCallCurrWords;
  audioCallAnswer;
  audioCallStatistic;
  audioCallModal;
  engPuzzleBtns;
  engPuzzleActiveIdx;
  engPuzzleControlBtns;
  engPuzzleCards;
  engPuzzlePage;
  engPuzzleGroup;
  engPuzzleXOffset;
  engPuzzleSolved;
  engPuzzleFailed;
  engPuzzleSuccess;
  engPuzzleResults;
  engPuzzleStatistic;
  engPuzzleStatisticInfo;
  engPuzzleFetchedWords;
  engPuzzleLoading;
  engPuzzleStartPage;
  dictionaryState;
  speakItControl;
  speakItFetch;
  speakItWord;
  speakItButtons;
  speakItStatisticInfo;
  speakItStatistic;
  // add more fields according rootReducer
}

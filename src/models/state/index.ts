export interface State {
  app;
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
  sprintMode;
  sprintGameMode;
  sprintScore;
  // add more fields according rootReducer
}

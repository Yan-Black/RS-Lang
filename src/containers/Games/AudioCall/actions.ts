import { ActionType } from './constants';
import { ActionCreator } from './models';

export const startPage: ActionCreator.StartPage = () => ({
  type: ActionType.START_PAGE,
});

export const gamePage: ActionCreator.GamePage = () => ({
  type: ActionType.GAME_PAGE,
});

export const statisticPage: ActionCreator.GamePage = () => ({
  type: ActionType.STATISTIC_PAGE,
});

export const lvl: ActionCreator.Lvl = (level: string) => ({
  type: ActionType.LVL,
  payload: level,
});

export const rnd: ActionCreator.Rnd = (round: string) => ({
  type: ActionType.RND,
  payload: round,
});

export const initWords: ActionCreator.InitWords = () => ({
  type: ActionType.INIT_WORDS,
});

export const fetchWords: ActionCreator.FetchWords = (wordsObj) => ({
  type: ActionType.FETCH_WORDS,
  payload: wordsObj,
});

export const checkAnswer: ActionCreator.CheckAnswer = (isChecked) => ({
  type: ActionType.CHECK_ANSWER,
  payload: isChecked,
});

export const correctAnswer: ActionCreator.CorrectAnswer = (isCorrect) => ({
  type: ActionType.CORRECT_ANSWER,
  payload: isCorrect,
});

export const wrongAnswer: ActionCreator.WrongAnswer = (isWrong) => ({
  type: ActionType.WRONG_ANSWER,
  payload: isWrong,
});

export const progressGame: ActionCreator.ProgressGame = () => ({
  type: ActionType.PROGRESS_GAME,
});

export const resetGame: ActionCreator.ResetGame = () => ({
  type: ActionType.RESET_GAME,
});

export const knowWords: ActionCreator.KnowWords = (wordsObj) => ({
  type: ActionType.KNOW,
  payload: wordsObj,
});

export const notKnowWords: ActionCreator.NotKnowWords = (wordsObj) => ({
  type: ActionType.NOT_KNOW,
  payload: wordsObj,
});

export const resetCurrStatistic: ActionCreator.ResetCurrStatistic = () => ({
  type: ActionType.RESET_CURR_STATISTIC,
});

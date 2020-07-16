import { FetchedWordData } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/models';
import { Dispatch } from 'react';
import { showLoader, hideLoader } from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Loader/actions';
import { Action } from 'redux';
import { ActionType } from './constants';
import { ActionUserWords, ActionCreator } from './models';

const filter = `${encodeURIComponent('{"$or":[{"userWord.optional.binded":true},{"userWord.optional.played":true}]}')}`;
// filter: {"$or":[{"$and": [{"$or": [{"userWord.difficulty": "strong"},{"userWord.difficulty": "easy"}]}]},{"userWord": null}]}

export const getUsertWords = async (dispatch: Dispatch<ActionUserWords | Action>) => {
  const { userId, token } = localStorage;
  try {
    dispatch(showLoader());
    const resp = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/aggregatedWords?wordsPerPage=3600&filter=${filter}`, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Credentials': 'true',
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });
    const words = await resp.json();
    dispatch(hideLoader());
    dispatch({ type: ActionType.UPDATE_USER_WORDS, payload: words[0].paginatedResults });
  } catch (err) {
    dispatch(hideLoader());
    alert(err);
  }
};

export const getStartWords = async (
  dispatch: Dispatch<ActionUserWords | Action>,
) => {
  try {
    dispatch(showLoader());
    const resp = await fetch('https://afternoon-falls-25894.herokuapp.com/words?page=0&group=0');
    const words = await resp.json();
    dispatch(hideLoader());
    dispatch({ type: ActionType.UPDATE_USER_WORDS, payload: words });
  } catch (err) {
    dispatch(hideLoader());
    alert(err);
  }
};

export const addNewUserWords = async (
  dispatch: Dispatch<ActionUserWords | Action>,
  group = 0,
  page = 0,
) => {
  try {
    dispatch(showLoader());
    const resp = await fetch(`https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`);
    const words = await resp.json();
    dispatch(hideLoader());
    dispatch({ type: ActionType.ADD_NEW_WORDS, payload: words });
  } catch (err) {
    dispatch(hideLoader());
    alert(err);
  }
};

export const updateUserWords = (words: FetchedWordData[]): ActionUserWords => ({
  type: ActionType.UPDATE_USER_WORDS,
  payload: words,
});

export const toggleAnswerChecked: ActionCreator.ToggleAnswerChecked = () => ({
  type: ActionType.TOGGLE_ANSWER_CHECKED,
});

export const toggleAnswerCorrect: ActionCreator.ToggleAnswerCorrect = () => ({
  type: ActionType.TOGGLE_ANSWER_CORRECT,
});

export const progressTraining: ActionCreator.ProgressTraining = () => ({
  type: ActionType.PROGRESS_TRAINING,
});

export const setInputWord: ActionCreator.SetInputWord = (word) => ({
  type: ActionType.SET_INPUT_WORD,
  payload: word,
});

export const toggleMoveToNext: ActionCreator.ToggleMoveToNext = () => ({
  type: ActionType.TOGGLE_MOVE_TO_NEXT,
});

export const resetTraining: ActionCreator.ResetTraining = () => ({
  type: ActionType.RESET_TRAINING,
});

export const toggleTrainingStatistic: ActionCreator.ToggleTrainingStatistic = (isOpen) => ({
  type: ActionType.TOGGLE_TRAINING_STATISTIC,
  payload: isOpen,
});

export const addToFailedTraining: ActionCreator.AddToFailedTraining = (failedWord) => ({
  type: ActionType.ADD_TO_FAILED_TRAINING,
  payload: failedWord,
});

export const addToSuccessTraining: ActionCreator.AddToSuccessTraining = (successWord) => ({
  type: ActionType.ADD_TO_SUCCESS_TRAINING,
  payload: successWord,
});

export const addRowOfSuccess: ActionCreator.AddRowOfSuccess = (number) => ({
  type: ActionType.ADD_ROW_OF_SUCCESS,
  payload: number,
});

export const resetTrainingStatistic: ActionCreator.ResetTrainingStatistic = () => ({
  type: ActionType.RESET_TRAINING_STATISTIC,
});

export const updateNewCardProgress: ActionCreator.UpdateNewCardProgress = () => ({
  type: ActionType.UPDATE_CARD_PROGRESS,
});

export const updateGameCardProgress: ActionCreator.UpdateGameCardsProgress = () => ({
  type: ActionType.GAME_CARD_PROGRESS,
});

import { ActionType } from './constants';
import { ActionCreator } from './models';

export const changeSetting: ActionCreator.ChangeSetting = (setting: boolean) => ({
  type: ActionType.CHANGE_SETTING,
  payload: setting,
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

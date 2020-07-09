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

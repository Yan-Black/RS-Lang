import { ActionType } from './constants';
import { ActionCreator } from './models';

export const difficultToLearning: ActionCreator.DifficultToLearning = (words) => ({
  type: ActionType.DIFFICULT_TO_LEARNING,
  payload: words,
});

export const deletedToLearning: ActionCreator.DeletedToLearning = (words) => ({
  type: ActionType.DELETED_TO_LEARNING,
  payload: words,
});

export const addToLearning: ActionCreator.AddToLearning = (words) => ({
  type: ActionType.ADD_TO_LEARNING,
  payload: words,
});

export const addToDifficult: ActionCreator.AddToDifficult = (words) => ({
  type: ActionType.ADD_TO_DIFFICULT,
  payload: words,
});

export const addToDeleted: ActionCreator.AddToDeleted = (words) => ({
  type: ActionType.ADD_TO_DELETED,
  payload: words,
});

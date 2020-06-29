import { Card } from 'components/Games/EnglishPuzzle/GameBlock/types';
import { Action } from 'redux';
import {
  UPDATE_COLLECTION,
  REMOVE_COLLECTION,
  UPDATE_OFFSET,
  REMOVE_OFFSET,
  SOLVED,
  NEW_GAME,
} from './types';
import { ActionCard, ActionOffset } from '../Models';

export const updateCollection = (data: Card[]): ActionCard => ({
  type: UPDATE_COLLECTION,
  payload: data,
});

export const removeCollection = (): ActionCard => ({
  type: REMOVE_COLLECTION,
});

export const updateOffsetX = (data: number[]): ActionOffset => ({
  type: UPDATE_OFFSET,
  payload: data,
});

export const removeOffsetX = (): ActionOffset => ({
  type: REMOVE_OFFSET,
});

export const setToSolved = (): Action => ({
  type: SOLVED,
});

export const setToNewGame = (): Action => ({
  type: NEW_GAME,
});

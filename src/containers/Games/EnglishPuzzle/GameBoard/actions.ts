import { Card } from 'components/Games/EnglishPuzzle/GameBlock/types';
import { UPDATE_COLLECTION, REMOVE_COLLECTION } from './types';

export interface ActionPayload {
  type: string;
  payload?: Card[];
}

export const updateCollection = (data: Card[]): ActionPayload => ({
  type: UPDATE_COLLECTION,
  payload: data,
});

export const removeCollection = (): ActionPayload => ({
  type: REMOVE_COLLECTION,
});

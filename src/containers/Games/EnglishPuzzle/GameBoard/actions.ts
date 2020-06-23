import { Card } from 'components/Games/EnglishPuzzle/GameBlock/types';
import { UPDATE_COLLECTION, REMOVE_COLLECTION } from './types';

export interface ActioPayload {
  type: string;
  payload?: Card[];
}

export const updateCollection = (data: Card[]): ActioPayload => ({
  type: UPDATE_COLLECTION,
  payload: data,
});

export const removeCollection = (): ActioPayload => ({
  type: REMOVE_COLLECTION,
});

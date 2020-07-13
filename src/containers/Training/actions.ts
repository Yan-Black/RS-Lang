import { FetchedWordData } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/models';
import { ActionType } from './constants';
import { ActionUserWords } from './models';

export const updateUserWords = (words: FetchedWordData[]): ActionUserWords => ({
  type: ActionType.UPDATE_USER_WORDS,
  payload: words,
});

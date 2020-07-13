import { FetchedWordData } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/models';

export interface IntialStateUserWords {
  userWords: FetchedWordData[];
}

export interface ActionUserWords {
  type: string;
  payload: FetchedWordData[];
}

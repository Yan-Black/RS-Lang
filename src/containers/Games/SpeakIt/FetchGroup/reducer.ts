import update from 'immutability-helper';
import { FETCH_WORDS } from './types';

interface FetchedWordData {
  audio: string;
  audioExample: string;
  audioMeaning: string;
  group: number;
  id: string;
  image: string;
  page: number;
  textExample: string;
  textExampleTranslate: string;
  textMeaning: string;
  textMeaningTranslate: string;
  transcription: string;
  word: string;
  wordTranslate: string;
  wordsPerExampleSentence: number;
}

export interface InitialStateWords {
  dataWords: Array<FetchedWordData>;
}

const initialState = {
  dataWords: [],
};

const fetchReducer = (state = initialState, action): InitialStateWords => {
  switch (action.type) {
    case FETCH_WORDS:
      return update(state, { dataWords: { $set: action.payload } });
    default:
      return state;
  }
};

export default fetchReducer;

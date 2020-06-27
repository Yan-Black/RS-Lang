import update from 'immutability-helper';
import {BACKGROUND_WORD, FETCH_WORDS, TRANSLATE_WORD} from './types';

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
  translate: string;
  background: string;
}

const initialState = {
  dataWords: [],
  translate: '',
  background: 'http://languagenow.co.uk/wp-content/uploads/2016/05/languagenow_english.jpg',
};

const fetchReducer = (state = initialState, action): InitialStateWords => {
  switch (action.type) {
    case FETCH_WORDS:
      return update(state, { dataWords: { $set: action.payload } });
    case TRANSLATE_WORD:
      return {...state, translate: action.payload}
    case BACKGROUND_WORD:
      return  {...state, background: action.payload}
    default:
      return state;
  }
};

export default fetchReducer;

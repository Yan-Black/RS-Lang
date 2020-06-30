import update from 'immutability-helper';
import {BACKGROUND_WORD, FETCH_WORDS, INIT_WORD_STATISTICS, MISTAKE, TRANSLATE_WORD, WIN} from './types';

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
  win: boolean;
  mistake: boolean;
}

export interface InitialStateWords {
  dataWords: Array<FetchedWordData>;
  translate: string;
  background: string;
  statistics: Array<FetchedWordData>;
}

const initialState = {
  dataWords: [],
  translate: '',
  background: 'http://languagenow.co.uk/wp-content/uploads/2016/05/languagenow_english.jpg',
  statistics: [],
};

const fetchReducer = (state = initialState, action): InitialStateWords => {
  switch (action.type) {
    case FETCH_WORDS:
      return update(state, { dataWords: { $set: action.payload } });
    case TRANSLATE_WORD:
      return {...state, translate: action.payload}
    case BACKGROUND_WORD:
      return  {...state, background: action.payload}
    case INIT_WORD_STATISTICS:
      return update(state, { statistics: { $set: action.payload } });
    case WIN:
      return {...state, statistics: state.statistics.map((el, index) => el.word === action.payload ? {...el, win: true} : el) }
    case MISTAKE:
      return {...state, statistics: state.statistics.map((el, index) => el.word === action.payload ? {...el, mistake: true} : el) }
    default:
      return state;
  }
};

export default fetchReducer;

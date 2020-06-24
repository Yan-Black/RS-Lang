/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import update from 'immutability-helper';

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
  currentWords: Array<FetchedWordData>;
}

const initialState = <InitialStateWords>{
  currentWords: [],
};

const wordsReducer = (state = initialState, action): InitialStateWords => {
  switch (action.type) {
    case 'FETCH_WORDS':
      return update(state, { currentWords: { $set: action.payload } });
    default: return state;
  }
};

export default wordsReducer;

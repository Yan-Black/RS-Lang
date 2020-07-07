import * as Models from 'models';
import { learningList, difficultList, deletedList } from 'components/Dictionary/temporaryData';
import { ActionType } from './constants';
import { DictionaryState } from './models';

const dictionaryInitState = <DictionaryState> {
  learningWords: learningList,
  difficultWords: difficultList,
  deletedWords: deletedList,
};

const dictionaryReducer: Models.Reducer<unknown> = (
  state: DictionaryState = dictionaryInitState, { type, payload },
) => {
  switch (type) {
    case ActionType.DIFFICULT_TO_LEARNING:
      return {
        ...state,
        learningWords: state.learningWords.concat(payload),
        difficultWords: state.difficultWords.filter((el) => el !== payload[0]),
      };
    case ActionType.DELETED_TO_LEARNING:
      return {
        ...state,
        learningWords: state.learningWords.concat(payload),
        deletedWords: state.deletedWords.filter((el) => el !== payload[0]),
      };
    case ActionType.ADD_TO_LEARNING:
      return { ...state, learningWords: state.learningWords.concat(payload) };
    case ActionType.ADD_TO_DIFFICULT:
      return { ...state, difficultWords: state.difficultWords.concat(payload) };
    case ActionType.ADD_TO_DELETED:
      return { ...state, deletedWords: state.deletedWords.concat(payload) };
    default:
      return state;
  }
};

export { dictionaryReducer };

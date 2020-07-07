import * as Models from 'models';
import { ActionType } from './constants';
import { ModalInitState, AnswerInitState, StatisticInitState } from './models';

const initialState = {
  page: 'START_PAGE',
  level: '1',
  round: '1',
  currentWords: [],
  translateOptions: [],
};

const modalInitState = <ModalInitState> {
  isOpen: false,
  title: '',
  message: '',
};

const answerInitState = <AnswerInitState> {
  btnTitle: ' НЕ ЗНАЮ',
  selectedWord: 'null',
  isChecked: false,
  isCorrect: false,
  isWrong: false,
  progress: 0,
};

const statisticInitState = <StatisticInitState> {
  wrongAnswers: [],
  correctAnswers: [],
};

const modalReducer: Models.Reducer<unknown> = (
  state: ModalInitState = modalInitState, { type, payload },
) => {
  let messageTitle = '';
  let messageBody = '';

  switch (payload) {
    case 'exit':
      messageTitle = 'Вы уверены? Тренировка не закончена!';
      messageBody = 'Если вы выйдете из игры, ваш прогресс не будет сохранен.';
      break;
    case 'not enough words':
      messageTitle = 'Недостаточно слов в словаре.';
      messageBody = 'Кажется, в словаре недостаточно слов для игры. Но Вы можете играть в режиме свободной игры. Хотите выйти из игры?';
      break;
    default:
      messageTitle = 'Ой! Ошибка!';
      messageBody = 'Что-то пошло не так. Попробуйте, пожалуйста, позже. Выйти из игры?';
      break;
  }

  switch (type) {
    case ActionType.TOGGLE_MODAL:
      return {
        ...state, isOpen: !state.isOpen, title: messageTitle, message: messageBody,
      };
    default:
      return state;
  }
};

const pageReducer: Models.Reducer<unknown> = (
  state = initialState.page, { type /* payload */ },
) => {
  switch (type) {
    case ActionType.START_PAGE:
      return type;
    case ActionType.GAME_PAGE:
      return type;
    case ActionType.STATISTIC_PAGE:
      return type;
    default:
      return state;
  }
};

const levelReducer: Models.Reducer<unknown> = (state = initialState.level, { type, payload }) => {
  switch (type) {
    case ActionType.LVL:
      return payload;
    default:
      return state;
  }
};

const roundReducer: Models.Reducer<unknown> = (state = initialState.round, { type, payload }) => {
  switch (type) {
    case ActionType.RND:
      return payload;
    default:
      return state;
  }
};

const currWordsReducer: Models.Reducer<unknown> = (
  state = initialState.currentWords, { type, payload },
) => {
  switch (type) {
    case ActionType.INIT_WORDS:
      return ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    case ActionType.FETCH_WORDS:
      return payload;
    default:
      return state;
  }
};

const answerReducer: Models.Reducer<unknown> = (
  state: AnswerInitState = answerInitState, { type, payload },
): AnswerInitState => {
  switch (type) {
    case ActionType.CHECK_ANSWER:
      return {
        ...state,
        isChecked: !state.isChecked,
        isCorrect: false,
        isWrong: false,
        selectedWord: payload,
      };
    case ActionType.CORRECT_ANSWER:
      return {
        ...state, isCorrect: payload, isWrong: !payload,
      };
    case ActionType.WRONG_ANSWER:
      return {
        ...state, isWrong: payload, isCorrect: !payload,
      };
    case ActionType.PROGRESS_GAME:
      return {
        ...state, progress: state.progress + 1,
      };
    case ActionType.RESET_GAME:
      return answerInitState;
    default:
      return state;
  }
};

const statisticReducer: Models.Reducer<unknown> = (
  state: StatisticInitState = statisticInitState, { type, payload },
): StatisticInitState => {
  switch (type) {
    case ActionType.KNOW:
      return { ...state, correctAnswers: state.correctAnswers.concat(payload) };
    case ActionType.NOT_KNOW:
      return { ...state, wrongAnswers: state.wrongAnswers.concat(payload) };
    case ActionType.RESET_CURR_STATISTIC:
      return statisticInitState;
    default:
      return state;
  }
};

export {
  pageReducer, levelReducer, roundReducer, currWordsReducer,
  answerReducer, statisticReducer, modalReducer,
};

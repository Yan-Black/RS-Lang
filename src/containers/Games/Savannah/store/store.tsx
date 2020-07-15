import { combineReducers, createStore } from 'redux';

const initialState = {
  failedWords: [],
  trueWords: [],
};

function addFailedWords(state = initialState, action) {
  if (action.type === 'ADD_FAILED_WORD') {
    return { ...state, failedWords: state.failedWords.concat(action.payload) };
  }
  return state;
}

function addTrueWords(state = initialState, action) {
  if (action.type === 'ADD_TRUE_WORD') {
    return { ...state, trueWords: state.trueWords.concat(action.payload) };
  }
  return state;
}

function modeReducer(state = '', action) {
  if (action.type === 'SETGAMEMODE' || action.type === 'SETLOADINGMODE' || action.type === 'SETENDMODE') {
    state = action.type;
    return state;
  }
  return state;
}

function modalReducer(state = false, action) {
  if (action.type === 'OPENMODALWINDOW') {
    state = true;
    return state;
  }
  if (action.type === 'CLOSEMODALWINDOW') {
    state = false;
    return state;
  }
  return state;
}

function buttonAccess(state = true, action) {
  if (action.type === 'TOGGLEBUTTONACCESS') {
    return !state;
  }
  return state;
}

function fallingWord(state = '', action) {
  if (action.type === 'SETFALLINGWORD') {

  }
}

function fallingWordToggle(state = false, action) {
  if (action.type === 'TOGGLEFALLINGWORDACTIVE') {
    return !state;
  }
  return state;
}

function showAnswerToggle(state = false, action) {
  if (action.type === 'SHOWANSWER') {
    return !state;
  }
  return state;
}

function showWordsToggle(state = false, action) {
  if (action.type === 'SHOWWORDS') {
    return !state;
  }
  return state;
}

function setFallingWord(state = null, action) {
  if (action.type === 'SET_FALLING_WORD') {
    return action.payload;
  }
  return state;
}

const rootReducer = combineReducers({
  mode: modeReducer,
  modalWindow: modalReducer,
  buttonAccessProperty: buttonAccess,
  fallingWordActive: fallingWordToggle,
  showAnswer: showAnswerToggle,
  failedWords: addFailedWords,
  trueWords: addTrueWords,
  showWords: showWordsToggle,
  fallingWord: setFallingWord,
});

const store = createStore(rootReducer);

export default store;

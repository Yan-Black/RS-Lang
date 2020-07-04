import {NEXT, RESET, RESULT_GAME, SELECTED_GAME_WORD, START_GAME, STOP_GAME} from "./types";

export interface InitialState {
  startGame: boolean;
  pagination: number;
  gameWord: string;
  result: boolean;
}


const initialState = {
  startGame: false,
  pagination: 0,
  gameWord: null,
  result: false
};

const startGameReducer = (state = initialState, action): InitialState => {
  switch (action.type) {
    case START_GAME:
      return {...state, startGame: action.payload}
    case STOP_GAME:
      return {...state, startGame: action.payload}
    case NEXT: {
        return {...state, pagination: state.pagination + 1}
    }
    case RESET:
      return {...state, pagination: 0, gameWord: null,  startGame: false }
    case SELECTED_GAME_WORD:
      return {...state, gameWord: action.payload}
    case RESULT_GAME:
      return {...state, result: action.payload}
    default:
      return state;
  }
};

export default startGameReducer;

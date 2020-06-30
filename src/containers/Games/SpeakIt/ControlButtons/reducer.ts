import {NEXT, RESET, SELECTED_GAME_WORD, START_GAME, STOP_GAME} from "./types";

export interface InitialState {
  startGame: boolean;
  pagination: number;
  gameWord: string;
}


const initialState = {
  startGame: false,
  pagination: 0,
  gameWord: null,
};

const startGameReducer = (state = initialState, action): InitialState => {
  switch (action.type) {
    case START_GAME:
      return {...state, startGame: action.payload}
    case STOP_GAME:
      return {...state, startGame: action.payload}
    case NEXT: {
      if(state.pagination === 9) {
        console.log('переволнен')
      }
      return {...state, pagination: state.pagination + 1 }
    }
    case RESET:
      return {...state, pagination: 0, gameWord: null,  startGame: false }
    case SELECTED_GAME_WORD:
      return {...state, gameWord: action.payload}
    default:
      return state;
  }
};

export default startGameReducer;

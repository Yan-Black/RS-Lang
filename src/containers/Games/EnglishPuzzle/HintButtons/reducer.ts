import { Action } from 'redux';
import { InitialStateHintBtns } from '../Models';

const initialState = <InitialStateHintBtns> {
  audioHintActive: true,
  translateHintActive: true,
  backgroundHintActive: false,
  speakerActive: false,
};

if (!localStorage.getItem('hintsState')) {
  localStorage.setItem('hintsState', JSON.stringify(initialState));
}

const btnsReducer = (
  state = JSON.parse(localStorage.getItem('hintsState')),
  action: Action,
): InitialStateHintBtns => {
  switch (action.type) {
    case 'AUDIO_ENABLE':
      return { ...state, audioHintActive: true };
    case 'AUDIO_DISABLE':
      return { ...state, audioHintActive: false };
    case 'TRANSLATE_ENABLE':
      return { ...state, translateHintActive: true };
    case 'TRANSLATE_DISABLE':
      return { ...state, translateHintActive: false };
    case 'BACKGROUND_ENABLE':
      return { ...state, backgroundHintActive: true };
    case 'BACKGROUND_DISABLE':
      return { ...state, backgroundHintActive: false };
    case 'SPEAKER_ENABLE':
      return { ...state, speakerActive: true };
    case 'SPEAKER_DISABLE':
      return { ...state, speakerActive: false };
    case 'SET_TO_USER_PREFERENCIES':
      return JSON.parse(localStorage.getItem('hintsState'));
    default: return state;
  }
};

export default btnsReducer;

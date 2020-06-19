interface InitialState {
  audioHintActive: boolean,
  translateHintActive: boolean,
  backgroundHintActive: boolean,
}

const initialState = <InitialState> {
  audioHintActive: true,
  translateHintActive: true,
  backgroundHintActive: false,
};

const btnsReducer = (state = initialState, action) => {
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
    default: return state;
  }
};

export default btnsReducer;

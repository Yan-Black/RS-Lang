import thunk from 'redux-thunk';
import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import groupReducer from 'containers/Games/SpeakIt/ControlLevel/reducer';
import fetchReducer from 'containers/Games/SpeakIt/FetchGroup/reducer';

const rootReducer = combineReducers({
  speakItControl: groupReducer,
  speakItfetch: fetchReducer,
});

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

store.subscribe(() => {
  console.log(store.getState());
});
export default store;

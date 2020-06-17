import { createStore } from 'redux';

import appReducer from '../containers/App/reducer';

const store = createStore(appReducer);

export default store;

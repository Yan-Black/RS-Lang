import { createStore } from 'redux';

import appReducer from '../containers/App/reducers';

const store = createStore(appReducer);

export default store;

import * as React from 'react';
import { Provider } from 'react-redux';
import './index.scss'

import store from './store/store';
import Savannah from '../../../components/Games/Savannah';

const SavannahIndex = () => (
  <Provider store={store}>
    <Savannah />
  </Provider>
);

export default SavannahIndex;

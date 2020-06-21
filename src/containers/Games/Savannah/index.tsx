import * as React from 'react';
import { Provider } from 'react-redux';

import store from 'store';
import Savannah from '../../../components/Games/Savannah';

const SavannahIndex = () => (
  <Provider store={store}>
    <Savannah />
  </Provider>
);

export default SavannahIndex;

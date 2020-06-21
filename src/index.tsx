import * as React from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';

import App from 'components/App';
import store from 'store';
import SavannahIndex from './containers/Games/Savannah';

const Index = () => (
  <Provider store={store}>
    <SavannahIndex />
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));

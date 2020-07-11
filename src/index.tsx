import * as React from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';

// import App from 'components/App';
import store from 'store';
import SpeakIt from 'components/Games/SpeakIt';

const Index = () => (
  <Provider store={store}>
    {/* <App /> */}
    <SpeakIt />
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));

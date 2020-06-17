import * as React from 'react';
import Authorization from 'components/Authorization';
import Main from 'components/Main';
import './index.scss';

function App() {
  return (
    <div className="app">
      <Authorization />
      <Main />
    </div>
  );
}

export default App;

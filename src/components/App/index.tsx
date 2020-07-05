import * as React from 'react';
import Authorization from 'components/Authorization';
import Main from 'components/Main';
import './index.scss';

const App: React.FC = () => (
  <div>
    <Authorization />
    <Main />
  </div>
);

export default App;

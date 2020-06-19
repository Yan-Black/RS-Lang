import * as React from 'react';
import Header from '../HeaderBlock';
import GameBlock from '../GameBlock';
import './index.scss';

const View: React.FunctionComponent = () => (
  <div className="english-puzzle-view">
    <Header />
    <GameBlock />
  </div>
);

export default View;

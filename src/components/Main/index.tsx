import * as React from 'react';
import Navigation from './mainComponents/navigation';
import './mainComponents/index.scss';

const Main: React.FC = () => (
  <div id="main" className="main-content">
    <Navigation />
  </div>
);

export default Main;

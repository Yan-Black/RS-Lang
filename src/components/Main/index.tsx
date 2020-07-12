import * as React from 'react';
import { withRouter } from 'react-router-dom';
import Navigation from './mainComponents/Aside';
import './mainComponents/index.scss';

const Main: React.FC = () => (
  <div id="main" className="main-content">
    <Navigation />
  </div>
);

export default withRouter(Main);

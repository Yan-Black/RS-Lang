import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Training from 'components/TrainingCard';
import Statistic from '../Statistic';
import Dictionary from '../Dictionary';
import Games from '../Games';
import Promo from '../Promo';
import AboutUs from '../AboutUs';

const Main: React.FC = () => (
  <div id="main" className="main-content">
    <Navigation />
  </div>
);

export default withRouter(Main);

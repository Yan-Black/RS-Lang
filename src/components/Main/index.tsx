import * as React from 'react';
import Statistic from '../Statistic';
import Dictionary from '../Dictionary';
import Games from '../Games';
import Promo from '../Promo';
import AboutUs from '../AboutUs';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Main() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/Statistic">Statistic</Link>
          </li>
          <li>
            <Link to="/Dictionary">Dictionary</Link>
          </li>
          <li>
            <Link to="/Games">Games</Link>
          </li>
          <li>
            <Link to="/Promo">Promo</Link>
          </li>
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/Statistic">
            <Statistic />
          </Route>
          <Route path="/Dictionary">
            <Dictionary />
          </Route>
          <Route path="/Games">
            <Games />
          </Route>
          <Route path="/Promo">
            <Promo />
          </Route>
          <Route path="/AboutUs">
            <AboutUs />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Main;

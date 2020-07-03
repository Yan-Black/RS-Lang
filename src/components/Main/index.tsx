import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Statistic from '../Statistic';
import Dictionary from '../Dictionary';
import Games from '../Games';
import Promo from '../Promo';
import AboutUs from '../AboutUs';
import Training from './Training';

const Main: React.FC = () => (
  <Training />
  // <Games />
  // <Router>
  //   <div>
  //     <ul>
  //       <li>
  //         <Link to="/Statistic">Statistic</Link>
  //       </li>
  //       <li>
  //         <Link to="/Dictionary">Dictionary</Link>
  //       </li>
  //       <li>
  //         <Link to="/Games">Games</Link>
  //       </li>
  //       <li>
  //         <Link to="/Promo">Promo</Link>
  //       </li>
  //       <li>
  //         <Link to="/AboutUs">About Us</Link>
  //       </li>
  //       <li>
  //         <Link to="/Training">Training</Link>
  //       </li>
  //     </ul>
  //     <Switch>
  //       <Route path="/Statistic">
  //         <Statistic />
  //       </Route>
  //       <Route path="/Dictionary">
  //         <Dictionary />
  //       </Route>
  //       <Route path="/Games">
  //         <Games />
  //       </Route>
  //       <Route path="/Promo">
  //         <Promo />
  //       </Route>
  //       <Route path="/AboutUs">
  //         <AboutUs />
  //       </Route>
  //       <Route path="/Training">
  //         <Training />
  //       </Route>
  //     </Switch>
  //   </div>
  // </Router>
);

export default Main;

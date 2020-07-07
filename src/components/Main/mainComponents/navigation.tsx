import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Statistic from '../../Statistic';
import Dictionary from '../../Dictionary';
import Games from '../../Games';
import Promo from '../../Promo';
import AboutUs from '../../AboutUs';
import MainInformation from './mainInformation';

function showStat() {
  const stat = document.getElementById('statistic');
  stat.style.opacity = '1';
}
function hideStat() {
  const stat = document.getElementById('statistic');
  stat.style.opacity = '0';
}

function showDict() {
  const stat = document.getElementById('dictionary');
  stat.style.opacity = '1';
}
function hideDict() {
  const stat = document.getElementById('dictionary');
  stat.style.opacity = '0';
}

function showPromo() {
  const stat = document.getElementById('promo');
  stat.style.opacity = '1';
}
function hidePromo() {
  const stat = document.getElementById('promo');
  stat.style.opacity = '0';
}

function showAbout() {
  const stat = document.getElementById('about');
  stat.style.opacity = '1';
}
function hideAbout() {
  const stat = document.getElementById('about');
  stat.style.opacity = '0';
}

function showSideMenu() {
  const menu = document.getElementById('header');
  menu.style.width = '300px';
  const stat = document.getElementById('statistic');
  const dict = document.getElementById('dictionary');
  const promo = document.getElementById('promo');
  const about = document.getElementById('about');
  const right = document.getElementById('right');
  const left = document.getElementById('left');

  right.style.display = 'none';
  left.style.display = 'inline';

  stat.style.opacity = '1';
  stat.classList.remove('side-menu');
  stat.classList.add('slide-menu');
  stat.removeAttribute('id');
  stat.setAttribute('id', 'statistic_det');

  dict.style.opacity = '1';
  dict.classList.remove('side-menu');
  dict.classList.add('slide-menu');
  dict.removeAttribute('id');
  dict.setAttribute('id', 'dictionary_det');

  promo.style.opacity = '1';
  promo.classList.remove('side-menu');
  promo.classList.add('slide-menu');
  promo.removeAttribute('id');
  promo.setAttribute('id', 'promo_det');

  about.style.opacity = '1';
  about.classList.remove('side-menu');
  about.classList.add('slide-menu');
  about.removeAttribute('id');
  about.setAttribute('id', 'about_det');
}

function hideSideMenu() {
  const menu = document.getElementById('header');
  menu.style.width = '100px';
  const stat = document.getElementById('statistic_det');
  const dict = document.getElementById('dictionary_det');
  const promo = document.getElementById('promo_det');
  const about = document.getElementById('about_det');
  const right = document.getElementById('right');
  const left = document.getElementById('left');

  right.style.display = 'inline';
  left.style.display = 'none';

  stat.style.opacity = '0';
  stat.classList.remove('slide-menu');
  stat.classList.add('side-menu');
  stat.removeAttribute('id');
  stat.setAttribute('id', 'statistic');

  dict.style.opacity = '0';
  dict.classList.remove('slide-menu');
  dict.classList.add('side-menu');
  dict.removeAttribute('id');
  dict.setAttribute('id', 'dictionary');

  promo.style.opacity = '0';
  promo.classList.remove('slide-menu');
  promo.classList.add('side-menu');
  promo.removeAttribute('id');
  promo.setAttribute('id', 'promo');

  about.style.opacity = '0';
  about.classList.remove('slide-menu');
  about.classList.add('side-menu');
  about.removeAttribute('id');
  about.setAttribute('id', 'about');
}

function Navigation():JSX.Element {
  return (
    <Router>
      <div id="header" className="header">
        <ul className="header-nav">
          <li>
            <Link to="/Statistic">
              {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
              <i onMouseOver={showStat} onMouseOut={hideStat} className="far fa-chart-bar" aria-label="Menu" />
              {' '}
              <span id="statistic" className="statistic side-menu"> Statistic</span>
            </Link>
          </li>
          <li>
            <Link to="/Dictionary">
              {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
              <i onMouseOver={showDict} onMouseOut={hideDict} className="fas fa-book dict" aria-label="Menu" />
              {' '}
              <span id="dictionary" className="dictionary side-menu"> Dictionary</span>
            </Link>
          </li>
          <li>
            <Link to="/Promo">
              {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
              <i onMouseOver={showPromo} onMouseOut={hidePromo} className="fas fa-video promo" aria-label="Menu" />
              {' '}
              <span id="promo" className="promo side-menu"> Promo</span>
            </Link>
          </li>
          <li>
            <Link to="/AboutUs">
              {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
              <i onMouseOver={showAbout} onMouseOut={hideAbout} className="fas fa-users about" aria-label="Menu" />
              {' '}
              <span id="about" className="about side-menu"> About Us</span>
            </Link>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            <i onClick={showSideMenu} id="right" className="fas fa-angle-right arrow-right" role="button" tabIndex={0} aria-label="Menu" />
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            <i onClick={hideSideMenu} id="left" style={{ display: 'none', cursor: 'pointer' }} className="fas fa-angle-left" role="button" tabIndex={0} aria-label="Menu" />
          </li>
        </ul>
        <div id="profile" className="profile">
          <i className="far fa-user-circle" />
        </div>
        <span className="sign" id="sign">Sign out</span>
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
      <MainInformation />
    </Router>

  );
}

export default Navigation;

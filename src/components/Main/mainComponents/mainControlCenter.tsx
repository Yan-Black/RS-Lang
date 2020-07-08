import * as React from 'react';
import { faSun, faMoon, faFont } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function setDarkMode() {
  const sun = document.getElementById('sun');
  const moon = document.getElementById('moon');
  const main = document.getElementById('main');

  sun.classList.remove('active');
  moon.classList.add('active');
  main.style.backgroundColor = '#242525';
  main.style.transition = '.3s';
  localStorage.setItem('darkmode', '1');
}

function setLightMode() {
  const sun = document.getElementById('sun');
  const moon = document.getElementById('moon');
  const main = document.getElementById('main');

  moon.classList.remove('active');
  sun.classList.add('active');
  main.style.backgroundColor = '#F8F2EE';
  main.style.transition = '.3s';
  localStorage.setItem('darkmode', '0');
}

let font = 1;

function plusFontSize() {
  if (font < 1.2) {
    font += 0.1;
    document.body.style.fontSize = `${font}rem`;
  }
  localStorage.setItem('fontsize', `${font}`);
}

function minusFontSize() {
  if (font > 0.8) {
    font -= 0.1;
    document.body.style.fontSize = `${font}rem`;
  }
  localStorage.setItem('fontsize', `${font}`);
}

class MainControlCenter extends React.Component {
  componentDidMount = ():void => {
    const darkMode = localStorage.getItem('darkmode');
    if (darkMode === '1') {
      setDarkMode();
    } else {
      setLightMode();
    }
    const fontSize = localStorage.getItem('fontsize');
    document.body.style.fontSize = `${fontSize}rem`;
  };

  render():JSX.Element {
    return (
      <div className="main-control-center">
        <div><p className="main-card-text" id="mainCardText">Settings</p></div>
        <div>
          <span>Dark Mode / Тёмный режим</span>
          <div className="modes">
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            <FontAwesomeIcon icon={faSun} id="sun" onClick={setLightMode} className="sun active" tabIndex={0} role="button" aria-label="Set Light Mode" />
            {' | '}
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            <FontAwesomeIcon icon={faMoon} id="moon" onClick={setDarkMode} className="moon " tabIndex={0} role="button" aria-label="Set Dark Mode" />
          </div>
        </div>
        <div>
          <span>Language / Язык</span>
          <div className="lang-switch" id="rus-button">
            <span>Русс</span>
          </div>
          <div className="lang-switch active-lang" id="eng-button">
            <span>Eng</span>
          </div>
        </div>
        <div>
          <span>Font size / Размер шрифта </span>
          <div className="font-switch">
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            <span onClick={plusFontSize} tabIndex={0} role="button" aria-label="Font+">
              <FontAwesomeIcon icon={faFont} />
              +
            </span>
            <span> | </span>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            <span onClick={minusFontSize} tabIndex={0} role="button" aria-label="Font-">
              <FontAwesomeIcon icon={faFont} />
              -
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default MainControlCenter;

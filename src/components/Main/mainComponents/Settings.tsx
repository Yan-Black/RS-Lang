import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import { faSun, faMoon, faFont } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setTheme } from 'containers/Main/actions';

const Settings: React.FC = () => {
  let font = 1;
  const plusFontSize = () => {
    if (font < 1.2) {
      font += 0.1;
      document.body.style.fontSize = `${font}rem`;
    }
    localStorage.setItem('fontsize', `${font}`);
  };
  const minusFontSize = () => {
    if (font > 0.8) {
      font -= 0.1;
      document.body.style.fontSize = `${font}rem`;
    }
    localStorage.setItem('fontsize', `${font}`);
  };
  const fontSize = localStorage.getItem('fontsize');
  document.body.style.fontSize = `${fontSize}rem`;
  const theme = useSelector((state: State) => state.mainTheme.theme);
  const dispatch = useDispatch();
  const setDarkMode = () => {
    dispatch(setTheme('dark'));
    localStorage.setItem('theme', JSON.stringify({ theme: 'dark' }));
  };
  const setLightMode = () => {
    dispatch(setTheme('light'));
    localStorage.setItem('theme', JSON.stringify({ theme: 'light' }));
  };

  return (
    <div className="main-control-center">
      <div><p className="main-card-text" id="mainCardText">Settings</p></div>
      <div>
        <span>Dark Mode / Тёмный режим</span>
        <div className="modes">
          <button
            type="button"
            className={
              theme === 'light'
                ? 'theme-btn sun'
                : 'theme-btn'
            }
            onClick={setLightMode}
          >
            <FontAwesomeIcon icon={faSun} />
          </button>
          {' | '}
          <button
            type="button"
            className={
              theme === 'dark'
                ? 'theme-btn moon'
                : 'theme-btn'
            }
            onClick={setDarkMode}
          >
            <FontAwesomeIcon icon={faMoon} />
          </button>
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
          <button
            type="button"
            className="main-font-btn"
            onClick={plusFontSize}
          >
            <FontAwesomeIcon icon={faFont} />
            +
          </button>
          <span> | </span>
          <button
            type="button"
            className="main-font-btn"
            onClick={minusFontSize}
          >
            <FontAwesomeIcon icon={faFont} />
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;

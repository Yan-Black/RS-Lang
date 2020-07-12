import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import { faSun, faMoon, faFont } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setTheme, changeAppLang } from 'containers/Main/actions';
import { eng, ru } from 'constants/main-page-constants';
import './index.scss';

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
  const lang = useSelector((state: State) => state.mainLang.lang);
  const [usedLang, setUsedLang] = lang === 'eng' ? useState(eng) : useState(ru);
  const changeToRus = () => dispatch(changeAppLang('ru'));
  const changeToEng = () => dispatch(changeAppLang('eng'));
  const langHandler = () => {
    if (lang === 'ru') {
      changeToEng();
      localStorage.setItem('lang', 'eng');
    } else {
      changeToRus();
      localStorage.setItem('lang', 'ru');
    }
  };
  const setDarkMode = () => {
    dispatch(setTheme('dark'));
    localStorage.setItem('theme', JSON.stringify({ theme: 'dark' }));
  };
  const setLightMode = () => {
    dispatch(setTheme('light'));
    localStorage.setItem('theme', JSON.stringify({ theme: 'light' }));
  };

  useEffect(() => (lang === 'eng' ? setUsedLang(eng) : setUsedLang(ru)), [lang]);

  return (
    <div className="main-control-center">
      <h1>{usedLang.settings.name}</h1>
      <div className="settings-block">
        <div className="settings-block-option">
          <span>{usedLang.settings.mode}</span>
          <div className="settings-block-theme-switch">
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
        <div className="settings-block-option">
          <span>{usedLang.settings.lang}</span>
          <div className="settings-block-lang-switch">
            <button
              className="settings-btn-lang"
              type="button"
              onClick={langHandler}
            >
              <span
                className={
                lang === 'eng'
                  ? 'settings-block-lang-active'
                  : 'settings-block-lang-disabled'
              }
              >
                Eng
              </span>
            </button>
            {' | '}
            <button
              className="settings-btn-lang"
              type="button"
              onClick={langHandler}
            >
              <span
                className={
                lang === 'ru'
                  ? 'settings-block-lang-active'
                  : 'settings-block-lang-disabled'
              }
              >
                Рус
              </span>
            </button>
          </div>
        </div>
        <div className="settings-block-option">
          <span>{usedLang.settings.fontSize}</span>
          <div className="settings-block-font-handler">
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
      <div />
    </div>
  );
};

export default Settings;

import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import { faSun, faMoon, faFont } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setTheme, changeAppLang, updateStudySettings } from 'containers/Main/actions';
import {
  eng, ru, studyModesRu, studyModesEng,
} from 'constants/main-page-constants';
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
  const theme: string = useSelector((state: State) => state.mainTheme.theme);
  const dispatch = useDispatch();
  const lang: string = useSelector((state: State) => state.mainLang.lang);
  const logged: boolean = useSelector((state: State) => state.authLog.isLogged);
  const studyMode = useSelector((state: State) => state.mainStudyMode.studyModes);
  const [usedLang, setUsedLang] = lang === 'eng' ? useState(eng) : useState(ru);
  const [usedModes, setModes] = lang === 'eng' ? useState(studyModesEng) : useState(studyModesRu);
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
  const [selected, setSelected] = useState('trainAllWords');
  const modeHandler = (e: any) => {
    const target = e.currentTarget;
    setSelected(target.value);
    studyMode[target.id] = true;
    const modesToChange: [string, boolean][] = Object.entries(studyMode);
    modesToChange.forEach((mode) => {
      if (mode[0] === target.id) {
        mode[1] = true;
      } else {
        mode[1] = false;
      }
    });
    const newModes = Object.fromEntries(modesToChange);
    dispatch(updateStudySettings(newModes));
  };

  useEffect(() => {
    if (lang === 'eng') {
      setUsedLang(eng);
      setModes(studyModesEng);
    } else {
      setUsedLang(ru);
      setModes(studyModesRu);
    }
  }, [lang]);

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
        {logged && (
        <div className="settings-block-modes">
          <ul className="settings-study-modes">
            {usedModes.map((modes) => (
              <li key={modes.name} className="study-option">
                <span>{modes.name}</span>
                <label className="study-option-container">
                  <input
                    type="radio"
                    className="mode-check"
                    value={modes.id}
                    id={modes.id}
                    checked={selected === modes.id}
                    onChange={modeHandler}
                  />
                  <span className="study-option-checkmark" />
                </label>
              </li>
            ))}
          </ul>
        </div>
        )}
      </div>
    </div>
  );
};

export default Settings;

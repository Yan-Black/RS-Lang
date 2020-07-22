import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { closeStartPage } from 'containers/Games/OurGame/StartPage/actions';
import { State } from '../../../../models/state';

import './startPage.scss';

const StartPage: React.FC = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState('block');
  const lang: string = useSelector((state: State) => state.mainLang.lang);
  const [style, setStyle] = useState('our-game-start-page');
  const removeStartPage = () => {
    setStyle('our-game-start-page our-game-hide-start-page');
    dispatch(closeStartPage());
    setTimeout(() => {
      setActive('none');
    }, 500);
  };
  return (
    lang === 'ru'
      ? (
        <div className={style} style={{ display: `${active}` }}>
          <div className="our-game-guide">
            <div className="our-game-app-info">
              <h1 className="our-game-appName">Английская виселица</h1>
              <p className="our-game-app-describe">Кликайте на буквы, угадывайте слово</p>
            </div>
            <button
              type="button"
              className="our-game-help-button"
              onClick={removeStartPage}
            >
              Начать
            </button>
          </div>
        </div>
      )
      : (
        <div className={style} style={{ display: `${active}` }}>
          <div className="our-game-guide">
            <div className="our-game-app-info">
              <h1 className="our-game-appName">English Hangman</h1>
              <p className="our-game-app-describe">Click on letters, guess the words.</p>
            </div>
            <button
              type="button"
              className="our-game-help-button"
              onClick={removeStartPage}
            >
              Start
            </button>
          </div>
        </div>
      )
  );
};
export default StartPage;

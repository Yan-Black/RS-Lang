import * as React from 'react';
import './index.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay, faCog, faCheckCircle, faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { State } from 'models';
import {
  cardEngOptions, cardRuOptions, eng, ru,
} from 'constants/main-page-constants';
import { handleSettings, openErrorModal } from 'containers/Main/actions';
import Authorization from 'components/Authorization';
import { Link } from 'react-router-dom';

const CardGame: React.FC = () => {
  const theme = useSelector((state: State) => state.mainTheme.theme);
  const dispatch = useDispatch();
  const settingsState = useSelector((state: State) => state.mainSetEnabled.hintsState);
  const amount = useSelector((state: State) => state.mainCardsWords.amount);
  const totalIndex = useSelector((state: State) => state.training.totalProgress);
  const totalCardsToTrain = amount.cards;
  const clickHandler = () => dispatch(handleSettings(true));
  const logged = useSelector((state: State) => state.authLog.isLogged);
  const lang = useSelector((state: State) => state.mainLang.lang);
  const [usedLang, setUsedLang] = lang === 'eng' ? useState(eng) : useState(ru);
  const [userCardLang, setUsedCardLang] = lang === 'eng' ? useState(cardEngOptions) : useState(cardRuOptions);
  // const isModalOpen = useSelector((state: State) => state.mainErrorModal.isOpen);

  useEffect(() => {
    if (lang === 'eng') {
      setUsedCardLang(cardEngOptions);
      setUsedLang(eng);
    } else {
      setUsedCardLang(cardRuOptions);
      setUsedLang(ru);
    }
  }, [lang]);

  const learnBtnClickHandler = () => {
    if (totalIndex >= totalCardsToTrain) {
      const title = usedLang.errorMessage.dailyRateTitle;
      const content = usedLang.errorMessage.dailyRateContent;
      dispatch(openErrorModal({ title, content }));
    }

    //   to do
    // else {
    //   if (usedWords.filter(studyMode).length === 0) {
    //     const title = usedLang.errorMessage.noWordsTitle;
    //     const content = usedLang.errorMessage.noWordsContent;
    //     dispatch(openErrorModal({ title, content }));
    //   }
    // }
  };

  return (
    <div className={theme === 'light' ? 'main-control-center' : 'main-control-center main-control-center-dark'}>
      {logged ? (
        <div className="main-control-wrapper">
          <div className="cards-words-amount">
            <div className="main-control-field">
              <span>{usedLang.cardSettings.amountNewWords}</span>
              <span id="cardsGameWords">{amount.words}</span>
            </div>
            <div className="main-control-field">
              <span>{usedLang.cardSettings.amountNewCards}</span>
              <span id="cardsGameCards">{amount.cards}</span>
            </div>
          </div>
          <div className="main-control-hints">
            {userCardLang.map((data) => (
              <div
                key={data.category}
                className="main-control-info"
              >
                <span>{data.category}</span>
                <ul>
                  {data.sentencies.map((setData) => (
                    <li
                      className="main-control-option"
                      key={setData.str}
                    >
                      {setData.str}
                      {settingsState[setData.val]
                        ? (
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="main-control-enabled"
                          />
                        )
                        : (
                          <FontAwesomeIcon
                            icon={faTimesCircle}
                            className="main-control-disabled"
                          />
                        )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="cards-game-progress">
            <div className="card-game-progress-info">
              <p>{usedLang.cardSettings.yourProgress}</p>
              <span>
                4/
                {amount.words}
              </span>
            </div>
            <ProgressBar variant="success" now={20} />
          </div>
          <div className="cards-game-buttons">
            <Link to={totalIndex >= totalCardsToTrain ? '/' : '/Training'}>
              <button
                type="button"
                className="cards-game-play-button"
                onClick={learnBtnClickHandler}
              >
                <FontAwesomeIcon icon={faPlay} />
                &nbsp;
                {usedLang.cardSettings.buttons.learn}
              </button>
            </Link>
            <button
              type="button"
              onClick={clickHandler}
              className="cards-game-setting-button"
            >
              <FontAwesomeIcon icon={faCog} />
              &nbsp;
              {usedLang.cardSettings.buttons.settings}
            </button>
          </div>
        </div>
      ) : <Authorization />}
    </div>
  );
};

export default CardGame;

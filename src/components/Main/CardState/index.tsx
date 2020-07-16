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
import { FetchedWordData } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/models';
import { openTraining } from 'containers/Training/action';

const CardGame: React.FC = () => {
  const theme = useSelector((state: State) => state.mainTheme.theme);
  const dispatch = useDispatch();
  const settingsState = useSelector((state: State) => state.mainSetEnabled.hintsState);
  const amount = useSelector((state: State) => state.mainCardsWords.amount);
  const totalIndex = useSelector((state: State) => state.training.totalProgress);
  const studyMode = useSelector((state: State) => state.mainStudyMode.studyModes);
  const clonedWords: FetchedWordData[] = useSelector((state: State) => state.appUserWords.userWords);
  const totalCardsToTrain = amount.cards;
  const progress = (totalIndex / amount.cards) * 100;
  const clickHandler = () => dispatch(handleSettings(true));
  const logged = useSelector((state: State) => state.authLog.isLogged);
  const lang = useSelector((state: State) => state.mainLang.lang);
  const [usedLang, setUsedLang] = lang === 'eng' ? useState(eng) : useState(ru);
  const [userCardLang, setUsedCardLang] = lang === 'eng' ? useState(cardEngOptions) : useState(cardRuOptions);
  let usedWords;
  if (studyMode.trainAllWords) {
    usedWords = clonedWords.filter((word) => (word || word.userWord) && (word || !word.userWord.optional.del));
  }
  if (studyMode.onlyNew) {
    usedWords = clonedWords.filter((word) => !word.userWord.optional.played);
  }
  if (studyMode.onlyRepeat) {
    usedWords = clonedWords.filter((word) => word.userWord.optional.repeatTimes > 0);
  }
  if (studyMode.onlyDifficult) {
    usedWords = clonedWords.filter((word) => word.userWord.optional.dif);
  }

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
    if (usedWords.length === 0) {
      const title = usedLang.errorMessage.noWordsTitle;
      const content = usedLang.errorMessage.noWordsContent;
      dispatch(openErrorModal({ title, content }));
    } else if (totalIndex >= totalCardsToTrain) {
      const title = usedLang.errorMessage.dailyRateTitle;
      const content = usedLang.errorMessage.dailyRateContent;
      dispatch(openErrorModal({ title, content }));
    } else {
      dispatch(openTraining());
    }
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
                {totalIndex}
                /
                {amount.cards}
              </span>
            </div>
            <ProgressBar variant="success" now={progress} />
          </div>
          <div className="cards-game-buttons">
            <button
              type="button"
              className="cards-game-play-button"
              onClick={learnBtnClickHandler}
            >
              <FontAwesomeIcon icon={faPlay} />
              {' '}
              {usedLang.cardSettings.buttons.learn}
            </button>
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

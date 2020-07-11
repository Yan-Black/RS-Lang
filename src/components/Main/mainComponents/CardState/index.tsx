import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay, faCog, faCheckCircle, faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { State } from 'models';
import { cardOptions } from 'constants/main-page-constants';
import { handleSettings } from 'containers/Main/actions';
import Authorization from 'components/Authorization';
import './index.scss';

const CardGame: React.FC = () => {
  const dispatch = useDispatch();
  const settingsState = useSelector((state: State) => state.mainSetEnabled.hintsState);
  const amount = useSelector((state: State) => state.mainCardsWords.amount);
  const clickHandler = () => dispatch(handleSettings(true));
  const logged = useSelector((state: State) => state.authLog.isLogged);
  return (
    <div className="main-control-center">
      {logged ? (
        <div className="main-control-wrapper">
          <div className="cards-words-amount">
            <div className="main-control-field">
              <span>Количество новых слов: </span>
              <span id="cardsGameWords">{amount.words}</span>
            </div>
            <div className="main-control-field">
              <span>Количество карточек: </span>
              <span id="cardsGameCards">{amount.cards}</span>
            </div>
          </div>
          <div className="main-control-hints">
            {cardOptions.map((data) => (
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
          <div className="cards-game-buttons">
            <button
              type="button"
              className="cards-game-play-button"
            >
              <FontAwesomeIcon icon={faPlay} />
              &nbsp;Play
            </button>
            <button
              type="button"
              onClick={clickHandler}
              className="cards-game-setting-button"
            >
              <FontAwesomeIcon icon={faCog} />
              &nbsp;Setting
            </button>
          </div>
        </div>
      ) : <Authorization />}
    </div>
  );
};

export default CardGame;

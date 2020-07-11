import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { handleSettings, updateSettings, updateAmount } from 'containers/Main/actions';
import { checkBoxes } from 'constants/main-page-constants';
import { State } from 'models';

const CardSettings: React.FC = () => {
  const dispatch = useDispatch();
  const amount = useSelector((state: State) => state.mainCardsWords.amount);
  const [err, setErr] = useState(false);
  const [errMes, setErrMes] = useState('');
  const [selectedHints, setSelected] = useState([]);
  const [cardsWordsAmount, setCardsWordsAmount] = useState([amount.words, amount.cards]);
  const setiingsModalHandler = () => dispatch(handleSettings(false));
  const collectProps = (e: React.MouseEvent<HTMLInputElement>) => {
    setErr(false);
    const target = e.currentTarget;
    const clone = Array.from(selectedHints);
    target.checked && clone.push(target.id);
    !target.checked && clone.splice(selectedHints.indexOf(target.id), 1);
    setSelected(clone);
  };
  const updateCardsWords = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const clone = Array.from(cardsWordsAmount);
    target.id === 'inputWords' && clone.splice(0, 1, Number(target.value));
    target.id === 'inputCards' && clone.splice(1, 1, Number(target.value));
    setCardsWordsAmount(clone);
  };
  const newSettingsState = {};
  const save = () => {
    if (!selectedHints.length) {
      setErr(true);
      setErrMes('Как минимум одна подсказка должна быть выбрана');
    } else if (cardsWordsAmount[0] > 50) {
      setErr(true);
      setErrMes('Количество слов не должно превышать 50');
    } else if (cardsWordsAmount[1] > 50) {
      setErr(true);
      setErrMes('Количество карточек не должно превышать 50');
    } else {
      checkBoxes.forEach((prop) => {
        selectedHints.indexOf(prop.id) !== -1
          ? newSettingsState[prop.id] = true
          : newSettingsState[prop.id] = false;
      });
      dispatch(updateSettings(newSettingsState));
      localStorage.setItem('savedSettings', JSON.stringify(newSettingsState));
      dispatch(updateAmount({ words: cardsWordsAmount[0], cards: cardsWordsAmount[1] }));
      localStorage.setItem(
        'savedAmount',
        JSON.stringify({ words: cardsWordsAmount[0], cards: cardsWordsAmount[1] }),
      );
      dispatch(handleSettings(false));
    }
  };

  return (
    <div className="settings-main-wrapper">
      <div className="settings-content">
        <div className="cards-words-amount">
          <div className="settings-field">
            <span>Количество новых слов:</span>
            <input
              id="inputWords"
              type="number"
              min="0"
              max="50"
              defaultValue={amount.words}
              onChange={updateCardsWords}
            />
          </div>
          <div className="settings-field">
            <span>Количество карточек:</span>
            <input
              id="inputCards"
              type="number"
              min="0"
              max="50"
              defaultValue={amount.cards}
              onChange={updateCardsWords}
            />
          </div>
        </div>
        <div>
          <div className="settings-options">
            {checkBoxes.map((data) => (
              <div className="settings-option" key={data.name}>
                <span>{data.name}</span>
                <label
                  className="check-container"
                  htmlFor={data.id}
                >
                  <input
                    className="set-check"
                    type="checkbox"
                    onClick={collectProps}
                    id={data.id}
                  />
                  <span className="checkmark" />
                </label>
              </div>
            ))}
          </div>
          <div className="settings-field">
            <button
              type="button"
              className="settings-btn"
              onClick={save}
            >
              save
            </button>
            {err
            && (
            <div className="settings-error">
              <span>{errMes}</span>
            </div>
            )}
            <button
              type="button"
              className="settings-btn"
              onClick={setiingsModalHandler}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardSettings;

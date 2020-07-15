import * as React from 'react';
import './index.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { handleSettings, updateSettings, updateAmount } from 'containers/Main/actions';
import { addNewUserWords } from 'containers/TrainingCard/actions';
import {
  checkBoxesRu, checkBoxesEng, eng, ru, engSetiingsErrors, ruSetiingsErrors,
} from 'constants/main-page-constants';
import { State } from 'models';
import Spinner from 'react-bootstrap/Spinner';
import { updateUserSettings } from 'constants/athorization-constants';

const CardSettings: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: State) => state.engPuzzleLoading.isLoading);
  const userWords = useSelector((state: State) => state.appUserWords.userWords);
  const amount = useSelector((state: State) => state.mainCardsWords.amount);
  const lang = useSelector((state: State) => state.mainLang.lang);
  const [err, setErr] = useState(false);
  const [errMes, setErrMes] = useState('');
  const [selectedHints, setSelected] = useState([]);
  const [cardsWordsAmount, setCardsWordsAmount] = useState([amount.words, amount.cards]);
  const usedLang = lang === 'eng' ? eng : ru;
  const usedCheckboxes = lang === 'eng' ? checkBoxesEng : checkBoxesRu;
  const usedErrors = lang === 'eng' ? engSetiingsErrors : ruSetiingsErrors;
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
    if (usedCheckboxes[0].data.every(
      (option) => selectedHints.indexOf(option.id) === -1,
    )) {
      setErr(true);
      setErrMes(usedErrors.mandatoryHint);
    } else if (cardsWordsAmount[0] > 50) {
      setErr(true);
      setErrMes(usedErrors.amountWords);
    } else if (cardsWordsAmount[1] > 100) {
      setErr(true);
      setErrMes(usedErrors.amountCards);
    } else {
      usedCheckboxes.forEach((prop) => {
        prop.data.forEach((option) => {
          selectedHints.indexOf(option.id) !== -1
            ? newSettingsState[option.id] = true
            : newSettingsState[option.id] = false;
        });
      });
      dispatch(updateSettings(newSettingsState));
      localStorage.setItem('savedSettings', JSON.stringify(newSettingsState));
      dispatch(updateAmount({ words: cardsWordsAmount[0], cards: cardsWordsAmount[1] }));
      localStorage.setItem(
        'savedAmount',
        JSON.stringify({ words: cardsWordsAmount[0], cards: cardsWordsAmount[1] }),
      );
      if (cardsWordsAmount[0] > userWords.length) {
        const group = 0;
        const pages: number[] = [1, 2, 3];
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        pages.forEach((page) => addNewUserWords(dispatch, group, page));
      }
      dispatch(handleSettings(false));
      updateUserSettings(cardsWordsAmount[0], newSettingsState);
    }
  };

  return (
    <div className="settings-main-wrapper">
      <div className="settings-content">
        <div className="cards-words-amount">
          <div className="settings-field">
            <span>{usedLang.cardSettings.amountNewWords}</span>
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
            <span>{usedLang.cardSettings.amountNewCards}</span>
            <input
              id="inputCards"
              type="number"
              min="0"
              max="100"
              defaultValue={amount.cards}
              onChange={updateCardsWords}
            />
          </div>
        </div>
        <div>
          <div className="settings-options">
            {usedCheckboxes.map((data) => (
              <React.Fragment key={data.name}>
                <div className="settings-option-category">
                  <span>{data.name}</span>
                </div>
                {data.data.map((option) => (
                  <div className="settings-option" key={option.name}>
                    <span>{option.name}</span>
                    <label
                      className="check-container"
                      htmlFor={option.id}
                    >
                      <input
                        className="set-check"
                        type="checkbox"
                        onClick={collectProps}
                        id={option.id}
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
          <div className="settings-field">
            <button
              type="button"
              className="settings-btn"
              onClick={save}
            >
              {lang === 'eng'
                ? 'save'
                : 'cохранить'}
            </button>
            {err
              && (
              <div className="settings-error">
                <span>{errMes}</span>
              </div>
              )}
            {loading
              && (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
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

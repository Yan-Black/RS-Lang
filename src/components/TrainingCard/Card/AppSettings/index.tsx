/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { State } from 'models';
import { changeSetting } from 'containers/TrainingCard/actions';

const AppSettings: React.FC = () => {
  const dispatch = useDispatch();
  const showWordTranslate = useSelector((state: State) => state.trainingSettings.showWordTranslate);
  const showWordExample = useSelector((state: State) => state.trainingSettings.showWordExample);
  const showWordMeaning = useSelector((state: State) => state.trainingSettings.showWordMeaning);
  const showWordTranscription = useSelector(
    (state: State) => state.trainingSettings.showWordTranscription,
  );
  const showWordImage = useSelector((state: State) => state.trainingSettings.showWordImage);
  const playAudio = useSelector((state: State) => state.trainingSettings.playAudio);
  const showAllTranslates = useSelector((state: State) => state.trainingSettings.showAllTranslates);
  const showHelpBTN = useSelector((state: State) => state.trainingSettings.showHelpBTN);
  const showDeleteBTN = useSelector((state: State) => state.trainingSettings.showDeleteBTN);
  const showDifficultBTN = useSelector((state: State) => state.trainingSettings.showDifficultBTN);
  const showIntervalBTNS = useSelector((state: State) => state.trainingSettings.showIntervalBTNS);

  const checkboxChangeHandler = (event) => {
    dispatch(changeSetting(event.currentTarget.id));
  };

  return (
    <div className="app-settings-wrapper d-flex justify-content-around">
      <div className="question-card-settings pr-2 border-right border-dark">
        <p className="question-card-settings-title text-danger">Настройки карточки с вопросом (*обязательно)</p>
        <div className="question-card-setting">
          <input type="checkbox" id="showWordTranslate" onChange={checkboxChangeHandler} checked={showWordTranslate} />
          <label htmlFor="showWordTranslate">Показывать перевод слова</label>
        </div>
        <div className="question-card-setting">
          <input type="checkbox" id="showWordExample" onChange={checkboxChangeHandler} checked={showWordExample} />
          <label htmlFor="showWordExample">Показывать пример употребления</label>
        </div>
        <div className="question-card-setting">
          <input type="checkbox" id="showWordMeaning" onChange={checkboxChangeHandler} checked={showWordMeaning} />
          <label htmlFor="showWordMeaning">Показывать объяснение значения</label>
        </div>
      </div>
      <div className="answer-card-settings" style={{ width: '70vw' }}>
        <p className="answer-card-settings text-danger">Настройки карторчки с ответом</p>
        <div className="d-flex justify-content-between">
          <div className="first-colum d-flex flex-column">
            <div className="answer-card-setting">
              <input type="checkbox" name="transcription" id="showWordTranscription" onChange={checkboxChangeHandler} checked={showWordTranscription} />
              <label htmlFor="showWordTranscription">Показывать транскрипцию</label>
            </div>
            <div className="answer-card-setting">
              <input type="checkbox" name="image" id="showWordImage" onChange={checkboxChangeHandler} checked={showWordImage} />
              <label htmlFor="showWordImage">Показывать картинку-ассоциацию</label>
            </div>
            <div className="answer-card-setting">
              <input type="checkbox" name="sound" id="playAudio" onChange={checkboxChangeHandler} checked={playAudio} />
              <label htmlFor="playAudio">Автоозвучка английского текста</label>
            </div>
            <div className="answer-card-setting">
              <input type="checkbox" name="translates" id="showAllTranslates" onChange={checkboxChangeHandler} checked={showAllTranslates} />
              <label htmlFor="showAllTranslates">Показывать перевод английского текста</label>
            </div>
          </div>
          <div className="secont-column d-flex flex-column">
            <div className="answer-card-setting">
              <input type="checkbox" name="help-btn" id="showHelpBTN" onChange={checkboxChangeHandler} checked={showHelpBTN} />
              <label htmlFor="showHelpBTN">Показывать кнопку Показать ответ</label>
            </div>
            <div className="answer-card-setting">
              <input type="checkbox" name="delete-btn" id="showDeleteBTN" onChange={checkboxChangeHandler} checked={showDeleteBTN} />
              <label htmlFor="showDeleteBTN">Показывать кнопку Удалить слово</label>
            </div>
            <div className="answer-card-setting">
              <input type="checkbox" name="difficult-btn" id="showDifficultBTN" onChange={checkboxChangeHandler} checked={showDifficultBTN} />
              <label htmlFor="showDifficultBTN">Показывать кнопку Сложное слово</label>
            </div>
            <div className="answer-card-setting">
              <input type="checkbox" name="repeat-interval-btn" id="showIntervalBTNS" onChange={checkboxChangeHandler} checked={showIntervalBTNS} />
              Показывать кнопки регулировки интервалов повторения
              <label htmlFor="showIntervalBTNS" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSettings;

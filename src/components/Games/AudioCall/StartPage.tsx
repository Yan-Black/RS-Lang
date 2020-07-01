/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import backgroundImage from '../../../assets/pattern-369543.svg';
import {
  gamePage, fetchWords, toggleModal,
} from '../../../containers/Games/AudioCall/actions';
import OptionItems from './OptionItems';
import { getWordsForGame, Json, getTranslateOptions } from './utils';
import ModalMessage from './ModalMessage';

function makeArray(length) {
  return new Array(length).fill(0);
}

function StartPage(): JSX.Element {
  const dispatch = useDispatch();
  const level = useSelector((state: State) => state.audioCallLevel);
  const round = useSelector((state: State) => state.audioCallRound);
  // let modalMessage = 'exit';

  const exitClickHandler = () => { dispatch(toggleModal('exit')); };
  const btnMyWordsClickHandler = () => {
    dispatch(gamePage());
    // const translateOption = await getTranslates('sharp', 'острый');
    // console.log(translateOption);
  };
  const btnFreeGameClickHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const jsonObj: Array<Json> = await getWordsForGame(level, round);
      const wordsList = round % 2 === 0 ? jsonObj.slice(0, 10) : jsonObj.slice(10);
      const gameData = await getTranslateOptions(wordsList);
      // console.log(gameData);
      dispatch(fetchWords(gameData));
      dispatch(gamePage());
    } catch (err) {
      // console.log(err);
      dispatch(toggleModal('error'));
    }
  };

  const keyPressHandler = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      dispatch(toggleModal('exit'));
    }
  };

  return (
    <div className="mb-2 text-white text-center align-items-center" style={{ height: '100vh', background: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <ModalMessage />
      <div className="p-4 text-right">
        <i className="fas fa-times text-white" style={{ cursor: 'pointer' }} role="button" tabIndex={0} onClick={exitClickHandler} onKeyPress={keyPressHandler} />
        {/* <Link to="/Main" onClick={exitClickHandler}><i className="fas fa-times text-white" /></Link> */}
      </div>
      <div className="d-flex flex-column justify-content-center" style={{ height: '70%' }}>
        <h1 className="mb-5">АУДИОВЫЗОВ</h1>
        <p>Выбери правильный перевод услышанного слова из 5 вариантов.</p>
        <p>В режиме &quot;Мои слова&quot; будут звучать слова из Вашего словаря</p>
        <p>В режиме &quot;Свободная игра&quot; будут часто употребляемые слова выбранной сложности</p>
        <div className="d-flex justify-content-center mt-5 text-white">
          <button
            type="button"
            className="btn btn-success mr-5"
            onClick={btnMyWordsClickHandler}
          >
            Мои слова
          </button>
          <form onSubmit={btnFreeGameClickHandler}>
            <div className="form-row align-items-center pl-5">
              <div className="col-auto mr-3">
                <button type="submit" className="btn btn-success">Свободная игра</button>
              </div>
              <span>
                Уровень
                {}
              </span>
              <div className="col-auto">
                <OptionItems options={makeArray(6)} currLvl={level} isLevelOption />
              </div>
              <span>Раунд</span>
              <div className="col-auto">
                <OptionItems options={makeArray(60)} currLvl={round} isLevelOption={false} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StartPage;

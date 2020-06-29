/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import { Link } from 'react-router-dom';
import backgroundImage from '../../../assets/pattern-369543.svg';
import {
  gamePage, fetchWords, startPage,
} from '../../../containers/Games/AudioCall/actions';
import OptionItems from './OptionItems';
import { getWordsForGame, Json, getTranslateOptions } from './utils';
// import ModalMessage from './ModalMessage';
// import { ActionCreator } from 'redux';

function makeArray(length) {
  return new Array(length).fill(0);
}

function StartPage(): JSX.Element {
  const dispatch = useDispatch();
  // const page = useSelector((state: State) => state.audioCallPage);
  const level = useSelector((state: State) => state.audioCallLevel);
  const round = useSelector((state: State) => state.audioCallRound);

  const exitClickHandler = () => dispatch(startPage());
  const btnMyWordsClickHandler = () => dispatch(gamePage());
  const btnFreeGameClickHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const jsonObj: Array<Json> = await getWordsForGame(level, round);
    const wordsList = round % 2 === 0 ? jsonObj.slice(0, 10) : jsonObj.slice(10);
    const gameData = getTranslateOptions(wordsList);
    // console.log(gameWords);
    dispatch(fetchWords(gameData));
    dispatch(gamePage());
  };

  return (
    <div className="p-3 mb-2 text-white text-center align-items-center" style={{ height: '100vh', background: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      {/* <ModalMessage /> */}
      <div className="p-3 text-right">
        <Link to="/Main" onClick={exitClickHandler}><i className="fas fa-times text-white" /></Link>
        {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop" />
        <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex={-1} role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                ...bla-bla
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Understood</button>
              </div>
            </div>
          </div>
        </div> */}
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

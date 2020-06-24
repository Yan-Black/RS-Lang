/* eslint-disable max-len */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import { Link } from 'react-router-dom';
import {
  gamePage, fetchWords, startPage,
} from '../../../containers/Games/AudioCall/actions';
import OptionItems from './OptionItems';
import getWordsForGame from './utils';
// import { ActionCreator } from 'redux';

function makeArray(length) {
  return new Array(length).fill(0);
}

function StartPage(): JSX.Element {
  const dispatch = useDispatch();
  // const page = useSelector((state: State) => state.audioCallPage);
  const level = useSelector((state: State) => state.audioCallLevel);
  const round = useSelector((state: State) => state.audioCallRound);

  return (
    <div className="p-3 mb-2 bg-info text-white text-center align-items-center" style={{ height: '100vh' }}>
      <div className="p-3 bg-info text-right">
        <Link to="/Main" onClick={() => dispatch(startPage())}><i className="fas fa-times" /></Link>
      </div>
      <div className="d-flex flex-column bg-info justify-content-center" style={{ height: '70%' }}>
        <h1 className="mb-5">АУДИОВЫЗОВ</h1>
        <p>Выбери правильный перевод услышанного слова из 5 вариантов.</p>
        <p>В режиме &quot;Мои слова&quot; будут звучать слова из Вашего словаря</p>
        <p>В режиме &quot;Свободная игра&quot; будут часто употребляемые слова выбранной сложности</p>
        <div className="d-flex justify-content-center mt-5 bg-info text-white">
          <button
            type="button"
            className="btn btn-success mr-5"
            onClick={() => {
              dispatch(gamePage());
            }}
          >
            Мои слова
          </button>
          <form onSubmit={async (e) => {
            e.preventDefault();
            const jsonObj = await getWordsForGame(level, round);
            dispatch(fetchWords(jsonObj));
            dispatch(gamePage());
          }}
          >
            <div className="form-row align-items-center pl-5 bg-info">
              <div className="col-auto bg-info mr-3">
                <button type="submit" className="btn btn-success">Свободная игра</button>
              </div>
              <span>
                Уровень
                {}
              </span>
              <div className="col-auto bg-info">
                <OptionItems options={makeArray(6)} />
                {/* <select
                  className="custom-select mr-sm-2"
                  id="levels"
                  defaultValue={level}
                  onChange={(event) => {
                    dispatch(lvl(event.currentTarget.value));
                  }}
                >
                  <OptionItems options={makeArray(6)} />
                </select> */}
              </div>
              <span>Раунд</span>
              <div className="col-auto bg-info">
                <OptionItems options={makeArray(60)} />
                {/* <select
                  className="custom-select mr-sm-2"
                  id="rounds"
                  defaultValue={round}
                  onChange={(event) => {
                    dispatch(rnd(event.currentTarget.value));
                  }}
                >
                  <OptionItems options={makeArray(60)} />
                </select> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StartPage;

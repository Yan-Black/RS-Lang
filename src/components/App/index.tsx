import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AudioCall from 'components/Games/AudioCall';
import EnglishPuzzle from 'components/Games/EnglishPuzzle';
import Savannah from 'components/Games/Savannah';
import SpeakIt from 'components/Games/SpeakIt';
import Sprint from 'components/Games/Sprint';
import OurGame from 'components/Games/OurGame';
import Statistic from 'components/Statistic';
import Dictionary from 'components/Dictionary';
import Promo from 'components/Promo';
import AboutUs from 'components/AboutUs';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'models';
import Main from 'components/Main';
import { getProfileFetch, getUserStatistic } from 'constants/athorization-constants';
import Loader from '../Authorization/Loader';
import './index.scss';

const App: React.FC = () => {
  const loading = useSelector((state: State) => state.engPuzzleLoading.isLoading);
  const regOpen = useSelector((state: State) => state.mainReg.regOpen);
  const logOpen = useSelector((state: State) => state.mainLog.logOpen);
  const { userId } = localStorage;
  const dispatch = useDispatch();
  useEffect(() => {
    userId && getUserStatistic();
    userId && getProfileFetch(dispatch);
  }, []);
  if (loading && !regOpen && !logOpen) {
    return (
      <div className="app-loader-wrapper">
        <Loader />
      </div>
    );
  }
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/Statistic">
          <Statistic />
        </Route>
        <Route path="/Dictionary">
          <Dictionary />
        </Route>
        <Route path="/Promo">
          <Promo />
        </Route>
        <Route path="/AboutUs">
          <AboutUs />
        </Route>
        <Route path="/AudioCall">
          <AudioCall />
        </Route>
        <Route path="/EnglishPuzzle">
          <EnglishPuzzle />
        </Route>
        <Route path="/Savannah">
          <Savannah />
        </Route>
        <Route path="/SpeakIt">
          <SpeakIt />
        </Route>
        <Route path="/Sprint">
          <Sprint />
        </Route>
        <Route path="/OurGame">
          <OurGame />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

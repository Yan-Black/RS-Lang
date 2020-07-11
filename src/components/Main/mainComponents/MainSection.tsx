import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models';
import { rusValues, engValues } from 'constants/main-page-constants';
import UserInfo from './UserInfo';
import GameCard from './gameCard';
import CardGame from './CardState';
import Settings from './Settings';
import ModalMain from './Modal';
import CardSettings from './CardSettings';

const MainInformation: React.FC = () => {
  const [gameCardsValues, setCardsValues] = useState([...engValues]);
  const settingOpen = useSelector((state: State) => state.mainSettings.isOpen);
  function fRusValues() {
    const engLangSwitchButton = document.getElementById('eng-button');
    const rusLangSwitchButton = document.getElementById('rus-button');
    engLangSwitchButton.classList.remove('active-lang');
    rusLangSwitchButton.classList.add('active-lang');

    const mainCardText = document.getElementById('mainCardText');
    const learnedWords = document.getElementById('learned-words');
    const playedGames = document.getElementById('played-games');
    const rightsWords = document.getElementById('rights-words');
    const correctRepeats = document.getElementById('correct-repeats');

    learnedWords.innerText = 'Выучено новых слов: 0';
    playedGames.innerText = 'Сыграно игры: 0';
    rightsWords.innerText = 'Правильных слов: 0';
    correctRepeats.innerText = 'Правильных повторов: 0';
    mainCardText.innerText = 'Настройки';
    setCardsValues([...rusValues]);
    localStorage.setItem('lang', 'rus');
  }

  function fEngValues() {
    const rusLangSwitchButton = document.getElementById('rus-button');
    const engLangSwitchButton = document.getElementById('eng-button');
    rusLangSwitchButton.classList.remove('active-lang');
    engLangSwitchButton.classList.add('active-lang');

    const mainCardText = document.getElementById('mainCardText');
    const learnedWords = document.getElementById('learned-words');
    const playedGames = document.getElementById('played-games');
    const rightsWords = document.getElementById('rights-words');
    const correctRepeats = document.getElementById('correct-repeats');

    learnedWords.innerText = 'Learned new words: 0';
    playedGames.innerText = 'Games you played: 0';
    rightsWords.innerText = 'Right words in a row: 0';
    correctRepeats.innerText = 'Correct Repeats: 0';
    mainCardText.innerText = 'Settings';

    setCardsValues([...engValues]);
    localStorage.setItem('lang', 'eng');
  }

  useEffect(() => {
    const rusLangSwitchButton = document.getElementById('rus-button');
    const engLangSwitchButton = document.getElementById('eng-button');
    rusLangSwitchButton.addEventListener('click', fRusValues);
    engLangSwitchButton.addEventListener('click', fEngValues);
    return function cleanUp() {
      rusLangSwitchButton.removeEventListener('click', fRusValues);
      engLangSwitchButton.removeEventListener('click', fEngValues);
    };
  });

  const cards = ['AudioCall', 'EnglishPuzzle', 'OurGame', 'Savannah', 'SpeakIt', 'Sprint'];
  const isOpen = useSelector((state: State) => state.mainModal.isOpen);
  const theme = useSelector((state: State) => state.mainTheme.theme);
  return (
    <div>
      <div
        className={
          theme === 'light'
            ? 'main-wrapper main-light'
            : 'main-wrapper main-dark'
        }
      >
        <p className="header-text" id="header-text-1">
          {gameCardsValues[6].firstParagraph}
        </p>
        <div className="main-stat-container">
          <UserInfo />
        </div>
        <div className="main-information">
          <Settings />
          <CardGame />
        </div>
        <p className="header-text-2" id="header-text-2">
          {gameCardsValues[6].secondParagraph}
        </p>
        <div className="games-container" id="eng-cards">
          {cards.map((card, idx) => (
            <GameCard
              key={card}
              route={card}
              name={gameCardsValues[idx].cardName}
              desc={gameCardsValues[idx].desc}
              imgSrc={gameCardsValues[idx].imgSrc}
              modalId={`modal-${7 + idx}`}
              cardId={`card-${7 + idx}`}
            />
          ))}
        </div>
        {settingOpen && <CardSettings />}
        {isOpen && <ModalMain />}
      </div>
    </div>
  );
};

export default MainInformation;

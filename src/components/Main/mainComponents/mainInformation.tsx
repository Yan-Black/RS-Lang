import * as React from 'react';
import { useState, useEffect } from 'react';
import MainStat from './mainStat';
import GameCard from './gameCard';
import CardGame from './cardGame';
import MainControlCenter from './mainControlCenter';

const rusValues = [
  {
    cardName: 'Аудио Вызов',
    desc: 'Улучшает восприятие на слух',
    imgSrc: 'src/components/Main/mainComponents/assets/conference.png',
  },
  {
    cardName: 'Головоломка',
    desc: 'Соберите целые предложения из отдельных слов. После того, как вы соберете все 10 предложений, вас ждет сюрприз',
    imgSrc: 'src/components/Main/mainComponents/assets/solution.png',
  },
  {
    cardName: 'Наша игра',
    desc: 'Описание',
    imgSrc: 'src/components/Main/mainComponents/assets/speaking.png',
  },
  {
    cardName: 'Саванна',
    desc: 'Помогает запомнить выученные слова. Также тренирует вашу реакцию и скорость восприятия английских слов',
    imgSrc: 'src/components/Main/mainComponents/assets/savannah.png',
  },
  {
    cardName: 'Говори',
    desc: 'Говори слова! Эта игра проверит ваше произношение',
    imgSrc: 'src/components/Main/mainComponents/assets/speaking.png',
  },
  {
    cardName: 'Спринт',
    desc: 'Научит быстро переводить на английский. Эта игра использует слова из вашего словаря',
    imgSrc: 'src/components/Main/mainComponents/assets/sprint.png',
  },
  {
    firstParagraph: 'Некоторая информация о вашем прогрессе',
    secondParagraph: 'Играй в наши игры, чтобы улучшить свои знания английского языка',
  },
];

const engValues = [{
  cardName: 'Audio Call',
  desc: 'Improves listening comprehension',
  imgSrc: 'src/components/Main/mainComponents/assets/conference.png',
},
{
  cardName: 'English Puzzle',
  desc: 'Collect whole sentences from single words. After you collect all 10 sentences, a surprise awaits you',
  imgSrc: 'src/components/Main/mainComponents/assets/solution.png',
},
{
  cardName: 'Our Game',
  desc: 'Description',
  imgSrc: 'src/components/Main/mainComponents/assets/speaking.png',
},
{
  cardName: 'Savannah',
  desc: 'Helps remember learned words. Also trains your reaction and speed of perception of English words',
  imgSrc: 'src/components/Main/mainComponents/assets/savannah.png',
},
{
  cardName: 'Speak It',
  desc: 'Say the words! This game will help check your pronunciation',
  imgSrc: 'src/components/Main/mainComponents/assets/speaking.png',
},
{
  cardName: 'Sprint',
  desc: 'Teaches you to quickly translate into English. This game uses words from your vocabulary',
  imgSrc: 'src/components/Main/mainComponents/assets/sprint.png',
},
{
  firstParagraph: 'Some information about your progress',
  secondParagraph: 'Play our games to improve your English skills',
}];

function MainInformation():JSX.Element {
  const [gameCardsValues, setCardsValues] = useState([...engValues]);

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

  return (
    <div className="main-wrapper">
      <p className="header-text" id="header-text-1">{gameCardsValues[6].firstParagraph}</p>
      <div className="main-stat-container">
        <MainStat />
      </div>
      <div className="main-information">
        <MainControlCenter />
        <CardGame />
      </div>
      <p className="header-text-2" id="header-text-2">{gameCardsValues[6].secondParagraph}</p>
      <div className="games-container" id="eng-cards">
        <GameCard name={gameCardsValues[0].cardName} desc={gameCardsValues[0].desc} imgSrc={gameCardsValues[0].imgSrc} modalId="modal-7" cardId="card-7" />
        <GameCard name={gameCardsValues[1].cardName} desc={gameCardsValues[1].desc} imgSrc={gameCardsValues[1].imgSrc} modalId="modal-8" cardId="card-8" />
        <GameCard name={gameCardsValues[2].cardName} desc={gameCardsValues[2].desc} imgSrc={gameCardsValues[2].imgSrc} modalId="modal-9" cardId="card-9" />
        <GameCard name={gameCardsValues[3].cardName} desc={gameCardsValues[3].desc} imgSrc={gameCardsValues[3].imgSrc} modalId="modal-10" cardId="card-10" />
        <GameCard name={gameCardsValues[4].cardName} desc={gameCardsValues[4].desc} imgSrc={gameCardsValues[4].imgSrc} modalId="modal-11" cardId="card-11" />
        <GameCard name={gameCardsValues[5].cardName} desc={gameCardsValues[5].desc} imgSrc={gameCardsValues[5].imgSrc} modalId="modal-12" cardId="card-12" />
      </div>
    </div>
  );
}

export default MainInformation;

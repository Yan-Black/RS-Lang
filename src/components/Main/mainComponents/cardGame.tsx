import * as React from 'react';
import { useState } from 'react';

function CardGame():JSX.Element {
  let initialState = {
    cardsGameWords: localStorage.getItem('CardsGameWordsValue') || 20,
    cardsGameCards: localStorage.getItem('CardsGameCardsValue') || 20,
    wordTranslate: localStorage.getItem('wordTranslate') || 'true',
    sentenceMeaning: localStorage.getItem('sentenceMeaning') || 'true',
    sentenceExample: localStorage.getItem('sentenceExample') || 'true',
    showAnswer: localStorage.getItem('showAnswer') || 'true',
    deleteWord: localStorage.getItem('deleteWord') || 'true',
    difficultWord: localStorage.getItem('difficultWord') || 'true',
  };

  const [cardGameSetting, setCardGameSetting] = useState(initialState);

  function settingVisible() {
    const setting = document.getElementById('setting');
    if (setting.style.display === 'none') {
      setting.style.display = 'flex';
    } else {
      const inputCardsGameWords = (document.getElementById('inputCardsGameWords') as HTMLInputElement);
      const inputCardsGameCards = (document.getElementById('inputCardsGameCards') as HTMLInputElement);

      localStorage.setItem('CardsGameWordsValue', inputCardsGameWords.value);
      localStorage.setItem('CardsGameCardsValue', inputCardsGameCards.value);

      const wordTranslate = (document.getElementById('wordTranslate') as HTMLInputElement);
      const sentenceMeaning = (document.getElementById('sentenceMeaning') as HTMLInputElement);
      const sentenceExample = (document.getElementById('sentenceExample') as HTMLInputElement);

      const showAnswer = (document.getElementById('showAnswer') as HTMLInputElement);
      const deleteWord = (document.getElementById('deleteWord') as HTMLInputElement);
      const difficultWord = (document.getElementById('difficultWord') as HTMLInputElement);

      const settingMistakes = document.getElementById('settingMistakes');
      if (wordTranslate.checked === false
        && sentenceMeaning.checked === false
        && sentenceExample.checked === false
      ) {
        settingMistakes.innerText = 'Choose at least one option / Выберите хотя бы одно значение';
      } else if (inputCardsGameWords.value === '' || inputCardsGameCards.value === '') {
        settingMistakes.innerText = 'Input correct number / Введите корректное значение';
      } else {
        localStorage.setItem('wordTranslate', String(wordTranslate.checked));
        localStorage.setItem('sentenceMeaning', String(sentenceMeaning.checked));
        localStorage.setItem('sentenceExample', String(sentenceExample.checked));

        localStorage.setItem('showAnswer', String(showAnswer.checked));
        localStorage.setItem('deleteWord', String(deleteWord.checked));
        localStorage.setItem('difficultWord', String(difficultWord.checked));

        settingMistakes.innerText = '';
        setting.style.display = 'none';

        initialState = {
          cardsGameWords: localStorage.getItem('CardsGameWordsValue'),
          cardsGameCards: localStorage.getItem('CardsGameCardsValue'),
          wordTranslate: localStorage.getItem('wordTranslate'),
          sentenceMeaning: localStorage.getItem('sentenceMeaning'),
          sentenceExample: localStorage.getItem('sentenceExample'),
          showAnswer: localStorage.getItem('showAnswer'),
          deleteWord: localStorage.getItem('deleteWord'),
          difficultWord: localStorage.getItem('difficultWord'),
        };
        setCardGameSetting(initialState);
      }
    }
  }

  function SettingWindow() {
    return (
      <div id="setting" style={{ display: 'none' }} className="setting-main">
        <div className="setting-content">
          <span id="settingMistakes" />
          <div>
            <span>Amount of new Words / Количество новых слов:</span>
            <div className="inputCardsGame">
              <input id="inputCardsGameWords" type="number" min="0" max="100" defaultValue="20" />
            </div>
          </div>
          <div>
            <span>Amount of Cards / Количество карточек:</span>
            <div className="inputCardsGame">
              <input id="inputCardsGameCards" type="number" min="0" max="100" defaultValue="50" />
            </div>
          </div>
          <div>
            <span>Hints / Подсказки:</span>
            <div className="cards-game-hints">
              <input type="checkbox" id="wordTranslate" />
              {' '}
              <span> Word Translate / Перевод слова</span>
              {' '}
              <br />
              <input type="checkbox" id="sentenceMeaning" />
              {' '}
              <span>
                {' '}
                Sentence explaining the meaning of the word
                / Предложение объясняющее значение слова
              </span>
              {' '}
              <br />
              <input type="checkbox" id="sentenceExample" />
              <span>
                {' '}
                Sentence with an example of using the studied word
                / Предложение - пример использования слова
              </span>
            </div>
          </div>
          <div>
            <span>Cards words setting / Настройки слов:</span>
            <div className="cards-game-words-setting">
              <input type="checkbox" id="showAnswer" />
              {' '}
              <span> Show Answer / Показать ответ</span>
              {' '}
              <br />
              <input type="checkbox" id="deleteWord" />
              {' '}
              <span> Delete Word / Удалить слово</span>
              {' '}
              <br />
              <input type="checkbox" id="difficultWord" />
              {' '}
              <span> Difficult word / Сложное слово</span>
            </div>
          </div>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          <div className="setting-save" onClick={settingVisible} role="button" tabIndex={0}>SAVE</div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-control-center">
      <div>
        <span>Amount of new Words / Количество новых слов: </span>
        <div className="modes">
          <span id="cardsGameWords">{ cardGameSetting.cardsGameWords }</span>
        </div>
      </div>
      <div>
        <span>Amount of Cards / Количество карточек: </span>
        <div className="modes">
          <span id="cardsGameCards">{ cardGameSetting.cardsGameCards }</span>
        </div>
      </div>
      <div>
        <span>Hints / Подсказки:</span>
        <div className="cards-game-hints">
          <ul>
            <li className={`item-${cardGameSetting.wordTranslate}`}>Word Translate / Перевод слова</li>
            <li className={`item-${cardGameSetting.sentenceMeaning}`}>Sentence explaining the meaning of the word / Предложение объясняющее значение слова</li>
            <li className={`item-${cardGameSetting.sentenceExample}`}>Sentence with an example of using the studied word / Предложение - пример использования слова</li>
          </ul>
        </div>
      </div>
      <div>
        <span>Cards words setting / Настройки слов:</span>
        <div className="cards-game-words-setting">
          <ul>
            <li className={`item-${cardGameSetting.showAnswer}`}>Show Answer / Показать ответ</li>
            <li className={`item-${cardGameSetting.deleteWord}`}>Delete Word / Удалить слово</li>
            <li className={`item-${cardGameSetting.difficultWord}`}>Difficult word / Сложное слово</li>
          </ul>
        </div>
      </div>
      <div className="cards-game-buttons">
        <button type="button" className="cards-game-play-button">
          <i className="fas fa-play" />
          {' '}
          Play
        </button>
        <button type="button" onClick={settingVisible} className="cards-game-setting-button">
          <i className="fas fa-cog" />
          {' '}
          Setting
        </button>
        <SettingWindow />
      </div>
    </div>
  );
}

export default CardGame;

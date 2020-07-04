import * as React from 'react';
import {useState} from 'react';

function CardGame () {

  let initialState = {
    cardsGameWords: localStorage.getItem("CardsGameWordsValue") || 20,
    cardsGameCards: localStorage.getItem("CardsGameCardsValue") || 20,
    wordTranslate: localStorage.getItem("wordTranslate") || "true",
    sentenceMeaning: localStorage.getItem("sentenceMeaning") || "true",
    sentenceExample: localStorage.getItem("sentenceExample") || "true",
    showAnswer: localStorage.getItem("showAnswer") || "true",
    deleteWord: localStorage.getItem("deleteWord") || "true",
    difficultWord: localStorage.getItem("difficultWord") || "true",
  }

  const [cardGameSetting, setCardGameSetting] = useState(initialState);

  function settingVisible() {
    let setting = document.getElementById("setting");
    if(setting.style.display == "none"){
      setting.style.display = "flex";
    } else {
      let inputCardsGameWords = (document.getElementById("inputCardsGameWords") as HTMLInputElement);
      let inputCardsGameCards = (document.getElementById("inputCardsGameCards") as HTMLInputElement);

      localStorage.setItem("CardsGameWordsValue", inputCardsGameWords.value);
      localStorage.setItem("CardsGameCardsValue", inputCardsGameCards.value);

      let wordTranslate = (document.getElementById("wordTranslate") as HTMLInputElement);
      let sentenceMeaning = (document.getElementById("sentenceMeaning") as HTMLInputElement);
      let sentenceExample = (document.getElementById("sentenceExample") as HTMLInputElement);

      let showAnswer = (document.getElementById("showAnswer") as HTMLInputElement);
      let deleteWord = (document.getElementById("deleteWord") as HTMLInputElement);
      let difficultWord = (document.getElementById("difficultWord") as HTMLInputElement);

      if(wordTranslate.checked == false && sentenceMeaning.checked == false && sentenceExample.checked == false || inputCardsGameWords.value == '' || inputCardsGameCards.value == '') {
        alert("Choose at least one option or input correct number / Выберите хотя бы одно значение или введите корректное значение");
      }
      else {
        localStorage.setItem("wordTranslate", String(wordTranslate.checked));
        localStorage.setItem("sentenceMeaning", String(sentenceMeaning.checked));
        localStorage.setItem("sentenceExample", String(sentenceExample.checked));

        localStorage.setItem("showAnswer", String(showAnswer.checked));
        localStorage.setItem("deleteWord", String(deleteWord.checked));
        localStorage.setItem("difficultWord", String(difficultWord.checked));

        setting.style.display = "none";

        initialState = {
          cardsGameWords: localStorage.getItem("CardsGameWordsValue"),
          cardsGameCards: localStorage.getItem("CardsGameCardsValue"),
          wordTranslate: localStorage.getItem("wordTranslate"),
          sentenceMeaning: localStorage.getItem("sentenceMeaning"),
          sentenceExample: localStorage.getItem("sentenceExample"),
          showAnswer: localStorage.getItem("showAnswer"),
          deleteWord: localStorage.getItem("deleteWord"),
          difficultWord: localStorage.getItem("difficultWord"),
        }
        setCardGameSetting(initialState);
      }
    }
  }

  function SettingWindow() {
    return (
      <div id="setting" style={{display: "none"}} className="setting-main">
        <div className="setting-content">
          <div>
            <span>Amount of new Words / Количество новых слов:</span>
            <div className="inputCardsGame">
                <input id="inputCardsGameWords" type="number" min="0" max="100" defaultValue="20"/>
            </div>
          </div>
          <div>
            <span>Amount of Cards / Количество карточек:</span>
            <div className="inputCardsGame">
              <input id="inputCardsGameCards" type="number" min="0" max="100" defaultValue="50"/>
            </div>
          </div>
          <div>
            <span>Hints / Подсказки:</span>
            <div className="cards-game-hints">
                <input type="checkbox" id="wordTranslate"/> <label htmlFor="wordTranslate"> Word Translate / Перевод слова</label> <br/>
                <input type="checkbox" id="sentenceMeaning"/> <label htmlFor="sentenceMeaning"> Sentence explaining the meaning of the word / Предложение объясняющее значение слова</label> <br/>
                <input type="checkbox" id="sentenceExample"/> <label htmlFor="sentenceExample"> Sentence with an example of using the studied word / Предложение - пример использования слова</label>
            </div>
          </div>
          <div>
            <span>Cards words setting / Настройки слов:</span>
            <div className="cards-game-words-setting">
              <input type="checkbox" id="showAnswer"/> <label htmlFor="showAnswer"> Show Answer / Показать ответ</label> <br/>
              <input type="checkbox" id="deleteWord"/> <label htmlFor="deleteWord"> Delete Word / Удалить слово</label> <br/>
              <input type="checkbox" id="difficultWord"/> <label htmlFor="difficultWord"> Difficult word / Сложное слово</label>
            </div>
          </div>
          <div onClick={settingVisible} className="setting-save">SAVE</div>
        </div>
      </div>
    );
  }

  return (
    <div className="cards-game-settings">
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
              <li className={"item-" + cardGameSetting.wordTranslate}>Word Translate / Перевод слова</li>
              <li className={"item-" + cardGameSetting.sentenceMeaning}>Sentence explaining the meaning of the word / Предложение объясняющее значение слова</li>
              <li className={"item-" + cardGameSetting.sentenceExample}>Sentence with an example of using the studied word / Предложение - пример использования слова</li>
            </ul>
          </div>
        </div>
        <div>
          <span>Cards words setting / Настройки слов:</span>
          <div className="cards-game-words-setting">
            <ul>
              <li className={"item-" + cardGameSetting.showAnswer}>Show Answer / Показать ответ</li>
              <li className={"item-" + cardGameSetting.deleteWord}>Delete Word / Удалить слово</li>
              <li className={"item-" + cardGameSetting.difficultWord}>Difficult word / Сложное слово</li>
            </ul>
          </div>
        </div>
        <div className="cards-game-buttons">
          <button className="cards-game-play-button"><i className="fas fa-play"></i> Play</button>
          <button onClick={settingVisible} className="cards-game-setting-button"><i className="fas fa-cog"></i> Setting</button>
          <SettingWindow />
        </div>
      </div>
  )
}

export default CardGame;



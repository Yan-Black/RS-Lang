import * as React from 'react';

const getWords = async (page, group) => {
  const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
  const res = await fetch(url);
  const json = await res.json();
  let currentWords = JSON.stringify(json, null, 1);
  console.log(currentWords);

};


getWords(0,0)


function AnkiGame() {
  return(
    <div className="word-field">
        <div className="card-container">
          <div className="learn-world">
            <p>I brought my <input></input> on my vacation</p>
          </div>
          <div className="learn-world-translation">
            <p>Я принес свою камеру в отпуск</p>
          </div>
        </div>
    </div>
  )
}

export default AnkiGame;

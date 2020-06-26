interface Json {
  audio: string,
  audioExample: string,
  audioMeaning: string,
  group: number,
  id: string,
  image: string,
  page: number,
  textExample: string,
  textExampleTranslate: string,
  textMeaning: string,
  textMeaningTranslate: string,
  transcription: string,
  word: string,
  wordTranslate: string,
  wordsPerExampleSentence: number,
  translateOptions: string[],
}

async function getWordsForGame(level: number, round: number): Promise<Array<Json>> {
  const group = level - 1;
  const page = round === 1 ? 0 : Math.ceil(round / 2) - 1;
  const response = await fetch(`https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`);
  const json = await response.json();
  // console.log(group, level, json);
  return json;
}

function playSound(sound: string): void {
  const urlError = 'https://raw.githubusercontent.com/rolling-scopes-school/lactivka-RS2020Q1/english-for-kids/english-for-kids/src/assets/audio/error.mp3?token=AL3NXWYBVBLP66NMVBUIMAC674324';
  const urlCorrect = 'https://raw.githubusercontent.com/rolling-scopes-school/lactivka-RS2020Q1/english-for-kids/english-for-kids/src/assets/audio/correct.mp3?token=AL3NXW7HH3YY47QCEUHEADK6746P6';
  // const urlError = '../../../assets/error.mp3';
  // const urlCorrect = '../../../assets/correct.mp3';
  const url = sound === 'error' ? urlError : urlCorrect;
  const audio = new Audio(url);
  // eslint-disable-next-line no-void
  void audio.play();
}

function getTranslateOptions(dataObj: Array<Json>): Array<Json> {
  const gameData = dataObj;
  for (let i = 0; i < gameData.length; i += 1) {
    const options = [dataObj[i].wordTranslate, 'two', 'three', 'four', 'five'];
    const shuffledOptions = shuffleArray(options);
    gameData[i].translateOptions = shuffledOptions;
  }
  // console.log(gameData);
  return gameData;
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    // eslint-disable-next-line no-param-reassign
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export {
  getWordsForGame, Json, playSound, getTranslateOptions,
};

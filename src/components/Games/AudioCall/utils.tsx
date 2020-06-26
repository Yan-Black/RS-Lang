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
}

// interface WordData {
//   imgJson: JSON,
//   audioJson: JSON,
// }

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

// async function getWordData(imgFile: string, audioFile: string): Promise<WordData> {
//   const imgUrl = `https://raw.githubusercontent.com/lactivka/rslang-data/master/${imgFile}`;
//   const audioUrl = `https://raw.githubusercontent.com/lactivka/rslang-data/master/${audioFile}`;

//   const imgResponse = await fetch(imgUrl);
//   const audioResponse = await fetch(audioUrl);
//   console.log(imgResponse, audioResponse);
//   const imgJson = await imgResponse.json();
//   const audioJson = await audioResponse.json();

//   return ({ imgJson, audioJson });
// }

export { getWordsForGame, Json, playSound };

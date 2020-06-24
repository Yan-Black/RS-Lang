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

async function getWordsForGame(level: number, round: number): Promise<Json> {
  const group = level;
  const page = Math.floor(round / 2);
  const response = await fetch(`https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`);
  const json = await response.json();
  // console.log(json);
  return json;
}

export default getWordsForGame;

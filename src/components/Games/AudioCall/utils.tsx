/* eslint-disable no-await-in-loop */
/* eslint-disable max-len */

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

interface WordsFromAPI {
  id: number,
  text: string,
  meanings: Array<unknown>
}

interface WordInfo {
  alternativeTranslations: Array<unknown>
  definition: {text: string, soundUrl: string}
  difficultyLevel: number
  examples: Array<unknown>
  id: string
  images: Array<unknown>
  meaningsWithSimilarTranslation: Array<unknown>
  mnemonics: null
  partOfSpeechCode: string
  prefix: string
  properties: unknown
  soundUrl: string
  text: string
  transcription: string
  translation: {text: string, note: string}
  updatedAt: string
  wordId: number
}

async function getWordsForGame(level: number, round: number): Promise<Array<Json>> {
  try {
    const group = level - 1;
    const page = round === 1 ? 0 : Math.ceil(round / 2) - 1;
    const response = await fetch(`https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`);
    const json = await response.json();
    return json;
  } catch (err) {
    throw new Error();
  }
}

async function getTranslates(wordsData: Array<Json>, word: string, wordTranslate: string): Promise<Array<string>> {
  const translates = [];
  const similarTranslates = [];
  const defaultTranslates = [];
  wordsData.map((wordData) => {
    if (wordData.wordTranslate !== wordTranslate) {
      defaultTranslates.push(wordData.wordTranslate);
    }
    return defaultTranslates;
  });
  shuffleArray(defaultTranslates);

  try {
    const rawResponse = await fetch(`https://dictionary.skyeng.ru/api/public/v1/words/search?search=${word}`);
    const content: Array<WordsFromAPI> = await rawResponse.json();
    const targetWord = content.filter((wordContent) => wordContent.text === word);
    const wordId = targetWord[0].id;
    const meaningsResponse = await fetch(`https://dictionary.skyeng.ru/api/public/v1/meanings?ids=${wordId}`);
    const meanings: Array<WordInfo> = await meaningsResponse.json();

    if (meanings.length > 0) {
      meanings[0].meaningsWithSimilarTranslation.map((meaning: WordInfo) => translates.push(meaning.translation.text));
      meanings[0].alternativeTranslations.map((meaning: WordInfo) => translates.push(meaning.translation.text));

      translates.map((translate: string) => {
        if (translate.slice(0, 2) === wordTranslate.slice(0, 2) && translate.length < wordTranslate.length + 5 && !similarTranslates.includes(translate)) similarTranslates.push(translate);
        return similarTranslates;
      });
      translates.map((translate: string) => {
        if (translate.length === wordTranslate.length && translate[0] === wordTranslate[0] && !similarTranslates.includes(translate)) similarTranslates.push(translate);
        return similarTranslates;
      });
      translates.map((translate: string) => {
        if (translate.slice(-4) === wordTranslate.slice(-4) && translate.length < wordTranslate.length + 5 && !similarTranslates.includes(translate)) similarTranslates.push(translate);
        return similarTranslates;
      });
      translates.map((translate: string) => {
        if (translate.slice(-3) === wordTranslate.slice(-3) && translate.length < wordTranslate.length + 5 && !similarTranslates.includes(translate)) similarTranslates.push(translate);
        return similarTranslates;
      });
      translates.map((translate: string) => {
        if (translate[0] === wordTranslate[0] && translate.length < wordTranslate.length + 5 && !similarTranslates.includes(translate)) similarTranslates.push(translate);
        return similarTranslates;
      });
      translates.map((translate: string) => {
        if (translate.length === wordTranslate.length && !similarTranslates.includes(translate)) similarTranslates.push(translate);
        return similarTranslates;
      });
      translates.map((translate: string) => {
        if (translate.length === wordTranslate.length + 1 && !similarTranslates.includes(translate)) similarTranslates.push(translate);
        return similarTranslates;
      });
      if (similarTranslates.length < 4) {
        translates.map((translate: string) => {
          if (!similarTranslates.includes(translate) && translate.length < wordTranslate.length + 5) similarTranslates.push(translate);
          return similarTranslates;
        });
      }
      if (similarTranslates.length < 4) {
        const newTranslates = similarTranslates.concat(defaultTranslates);
        return newTranslates.slice(0, 4);
      }
      return similarTranslates.slice(0, 4);
    }
    return defaultTranslates.slice(0, 4);
  } catch (err) {
    return defaultTranslates.slice(0, 4);
  }
}

function playSound(sound: string): void {
  const urlError = 'https://raw.githubusercontent.com/rolling-scopes-school/lactivka-RS2020Q1/english-for-kids/english-for-kids/src/assets/audio/error.mp3?token=AL3NXWYFT2DZ6YS3KDTPDUK7BLJWY';
  const urlCorrect = 'https://raw.githubusercontent.com/rolling-scopes-school/lactivka-RS2020Q1/english-for-kids/english-for-kids/src/assets/audio/correct.mp3?token=AL3NXWZCT2KUBZ32NCHFZT27BLJHO';

  const url = sound === 'error' ? urlError : urlCorrect;
  const audio = new Audio(url);

  // eslint-disable-next-line no-void
  void audio.play();
}

async function getTranslateOptions(dataObj: Array<Json>): Promise<Array<Json>> {
  const gameData = dataObj;
  for (let i = 0; i < gameData.length; i += 1) {
    const targetWord = dataObj[i].word;
    const targetTranslation = dataObj[i].wordTranslate;
    const options = await getTranslates(gameData, targetWord, targetTranslation);
    options.push(targetTranslation);
    const shuffledOptions = shuffleArray(options);
    gameData[i].translateOptions = shuffledOptions;
  }
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
  getWordsForGame, Json, playSound, getTranslateOptions, getTranslates,
};

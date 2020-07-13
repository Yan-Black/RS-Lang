import {
  faVideo,
  faBook,
  faUsers,
  faChartBar,
} from '@fortawesome/free-solid-svg-icons';

export const eng = {
  unregistred: 'As an anonymous user, you can test our mini-games, but long-term statistics will not be saved. Setting up training cards as well as the training process itself is available only to registered users.',
  pageNames: {
    statistic: 'Statistic',
    dictionary: 'Dictionary',
    promo: 'Promo',
    about: 'Team',
  },
  logout: 'Logout',
  userProgress: {
    learned: 'Learned new words:',
    played: 'Games you played:',
    rightInARow: 'Right words in a row:',
    correctRepeats: 'Correct repeats:',
  },
  settings: {
    name: 'Settings',
    mode: 'Dark mode',
    lang: 'Language',
    fontSize: 'Font size',
  },
  cardSettings: {
    amountNewWords: 'New words amount:',
    amountNewCards: 'Cards amount:',
    yourProgress: 'Todays progress:',
    buttons: {
      learn: 'learn',
      settings: 'settings',
    },
  },
  mainSentence1: 'Information about your progress',
  mainSentence2: 'Play our games to improve your english skills',
  games: {
    audioCall: {
      name: 'Audio Call',
      description: 'Improves listening comprehension',
      imgSrc: 'src/assets/main-page-images/conference.png',
    },
    englishPuzzle: {
      name: 'English Puzzle',
      description: 'Collect whole sentences from single words. After you collect all 10 sentences, a surprise awaits you',
      imgSrc: 'src/assets/main-page-images/solution.png',
    },
    ourGame: {
      name: 'Our Game',
      description: 'description',
      imgSrc: 'src/assets/main-page-images/speaking.png',
    },
    savannah: {
      name: 'Savannah',
      description: 'Helps remember learned words. Also trains your reaction and speed of perception of English words',
      imgSrc: 'src/assets/main-page-images/savannah.png',
    },
    speakIt: {
      name: 'Speak It',
      description: 'Say the words! This game will help check your pronunciation',
      imgSrc: 'src/assets/main-page-images/speaking.png',
    },
    sprint: {
      name: 'Sprint',
      description: 'Teaches you to quickly translate into English. This game uses words from your vocabulary',
      imgSrc: 'src/assets/main-page-images/sprint.png',
    },
  },
};

export const ru = {
  unregistred: 'Будучи анонимным пользователем вы можете протестировать наши мини игры, однако долгосрочная статистика не будет соxранена. Настройка карточек обучения, а также сам процеесс обучения доступен только зарегестрированным пользователям. ',
  pageNames: {
    statistic: 'Статистика',
    dictionary: 'Словарь',
    promo: 'Промо',
    about: 'Команда',
  },
  logout: 'Выйти',
  userProgress: {
    learned: 'Выученные новые слова:',
    played: 'Игры которые вы сыграли:',
    rightInARow: 'Правильно слов без ошибок:',
    correctRepeats: 'Правильные повторения:',
  },
  settings: {
    name: 'Настройки',
    mode: 'Тёмный режим',
    lang: 'Язык',
    fontSize: 'Размер шрифта',
  },
  cardSettings: {
    amountNewWords: 'Количество новых слов:',
    amountNewCards: 'Количество карточек:',
    yourProgress: 'Прогресс за сегодня:',
    buttons: {
      learn: 'Учить',
      settings: 'настройки',
    },
  },
  mainSentence1: 'Информация о твоём текущем прогрессе',
  mainSentence2: 'Играй в наши мини игры чтобы улучшить свой английский',
  games: {
    audioCall: {
      name: 'Аудио Вызов',
      description: 'Улучшает восприятие английской речи.',
      imgSrc: 'src/assets/main-page-images/conference.png',
    },
    englishPuzzle: {
      name: 'Мозайка',
      description: 'Собирай предложения из отдельных слов. После 10 собранных предложений тебе откроется картина.',
      imgSrc: 'src/assets/main-page-images/solution.png',
    },
    ourGame: {
      name: 'Наша Игра',
      description: 'Описание.',
      imgSrc: 'src/assets/main-page-images/speaking.png',
    },
    savannah: {
      name: 'Саванна',
      description: 'Помогает лучше запомнить выученные слова. Также тренирует твою реакцию и скорость восприятия английской речи.',
      imgSrc: 'src/assets/main-page-images/savannah.png',
    },
    speakIt: {
      name: 'Скажи Это',
      description: 'Произноси слова. Это поможет улучшить твоё произношение.',
      imgSrc: 'src/assets/main-page-images/speaking.png',
    },
    sprint: {
      name: 'Спринт',
      description: 'Учит тебя переводить быстро. Игра использует слова из твоего словаря.',
      imgSrc: 'src/assets/main-page-images/sprint.png',
    },
  },
};

export const cardRuOptions = [
  {
    category: 'Подсказки:',
    sentencies: [
      {
        str: 'Перевод слова',
        val: 'translate',
      },
      {
        str: 'Предложение объясняющее значение слова',
        val: 'wordMeaning',
      },
      {
        str: 'Предложение - пример использования слова',
        val: 'example',
      },
    ],
  },
  {
    category: 'Настройки слов:',
    sentencies: [
      {
        str: 'Показать ответ',
        val: 'showAnswer',
      },
      {
        str: 'Удалить слово',
        val: 'deleteWord',
      },
      {
        str: 'Сложное слово',
        val: 'difficultWord',
      },
    ],
  },
];

export const cardEngOptions = [
  {
    category: 'Hints:',
    sentencies: [
      {
        str: 'Word translate',
        val: 'translate',
      },
      {
        str: 'Sentence with word meaning explanation',
        val: 'wordMeaning',
      },
      {
        str: 'Sentence with examlple of word usage',
        val: 'example',
      },
    ],
  },
  {
    category: 'Word settings:',
    sentencies: [
      {
        str: 'Show answer',
        val: 'showAnswer',
      },
      {
        str: 'Delete word',
        val: 'deleteWord',
      },
      {
        str: 'Difficult word',
        val: 'difficultWord',
      },
    ],
  },
];

export const pagesEng = [
  {
    page: eng.pageNames.statistic,
    path: eng.pageNames.statistic,
    icon: faChartBar,
  }, {
    page: eng.pageNames.dictionary,
    path: eng.pageNames.dictionary,
    icon: faBook,
  }, {
    page: eng.pageNames.promo,
    path: eng.pageNames.promo,
    icon: faVideo,
  }, {
    page: eng.pageNames.about,
    path: eng.pageNames.about,
    icon: faUsers,
  },
];

export const pagesRu = [
  {
    page: ru.pageNames.statistic,
    path: eng.pageNames.statistic,
    icon: faChartBar,
  }, {
    page: ru.pageNames.dictionary,
    path: eng.pageNames.dictionary,
    icon: faBook,
  }, {
    page: ru.pageNames.promo,
    path: eng.pageNames.promo,
    icon: faVideo,
  }, {
    page: ru.pageNames.about,
    path: eng.pageNames.about,
    icon: faUsers,
  },
];

export const checkBoxesRu = [
  { name: 'Перевод слова', id: 'translate' },
  { name: 'Предложение объясняющее значение слова', id: 'wordMeaning' },
  { name: 'Предложение - пример использования слова', id: 'example' },
  { name: 'Показать ответ', id: 'showAnswer' },
  { name: 'Удалить слово', id: 'deleteWord' },
  { name: 'Сложное слово', id: 'difficultWord' },
];

export const checkBoxesEng = [
  { name: 'Word translate', id: 'translate' },
  { name: 'Sentence with word meaning explanation', id: 'wordMeaning' },
  { name: 'Sentence with examlple of word usage', id: 'example' },
  { name: 'Show answer', id: 'showAnswer' },
  { name: 'Delete word', id: 'deleteWord' },
  { name: 'Difficult word', id: 'difficultWord' },
];

export const cardsNames = ['audioCall', 'englishPuzzle', 'ourGame', 'savannah', 'speakIt', 'sprint'];

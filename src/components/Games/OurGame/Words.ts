import book1 from '../../../constants/words-constants/book1';
import book2 from '../../../constants/words-constants/book2';
import book3 from '../../../constants/words-constants/book3';
import book4 from '../../../constants/words-constants/book4';
import book5 from '../../../constants/words-constants/book5';
import book6 from '../../../constants/words-constants/book6';

const book1Words = [];
const book2Words = [];
const book3Words = [];
const book4Words = [];
const book5Words = [];
const book6Words = [];

for (let i = 0; i < book1.length; i++) {
  book1Words.push(book1[i].word);
  book2Words.push(book2[i].word);
  book3Words.push(book3[i].word);
  book4Words.push(book4[i].word);
  book5Words.push(book5[i].word);
  book6Words.push(book6[i].word);
}

const book1Questions = [];
const book2Questions = [];
const book3Questions = [];
const book4Questions = [];
const book5Questions = [];
const book6Questions = [];

for (let i = 0; i < book1.length; i++) {
  book1Questions.push(book1[i].textExample);
  book2Questions.push(book2[i].textExample);
  book3Questions.push(book3[i].textExample);
  book4Questions.push(book4[i].textExample);
  book5Questions.push(book5[i].textExample);
  book6Questions.push(book6[i].textExample);
}

const bookWords = [book1Words, book2Words, book3Words, book4Words, book5Words, book6Words];
const bookQuestions = [book1Questions, book2Questions, book3Questions, book4Questions, book5Questions, book6Questions];

function Word() {
  return bookWords[Number(localStorage.getItem('hangmanLevel'))][Number(localStorage.getItem('hangmanWord'))];
}

function Question() {
  return bookQuestions[Number(localStorage.getItem('hangmanLevel'))][Number(localStorage.getItem('hangmanWord'))];
}

export { Word, Question };

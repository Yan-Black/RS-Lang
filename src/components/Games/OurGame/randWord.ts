import book1 from '../../../constants/words-constants/book1';

export function randNum() {
  const randnum = Math.floor(Math.random() * book1.length);
  localStorage.setItem('hangmanWord', String(randnum));
}

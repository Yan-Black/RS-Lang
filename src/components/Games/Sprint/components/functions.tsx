function shuffleArray(arr: Array<string>): string[] {
  const newArr = arr;
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

function GetWordObjectFromData(arr) {
  const translates = [];
  const getRandom = () => translates[Math.floor(Math.random() * translates.length)];

  arr.forEach((obj) => {
    translates.push(obj.wordTranslate);
  });
  return getRandom();
}

export {
  GetWordObjectFromData, shuffleArray,
};

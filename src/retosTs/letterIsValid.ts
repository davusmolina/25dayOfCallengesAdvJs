function letterIsValid(str: string): boolean {
  if (str.includes('{') || str.includes('[')) return false;
  if (str.includes('()')) return false;
  if (str.includes('(') && !str.includes(')')) return false;

  const words: string[] = str.split(' ');
  let closeCorrectly = true;

  words.forEach((word) => {
    if (word.includes('(')) {
      if (!(word[0] === '(' && word[word.length - 1] === ')')) {
        closeCorrectly = false;
      }
    }
  });

  return closeCorrectly;
}
export { letterIsValid };

function canReconfigure(from: string, to: string): boolean {
  if (from.length !== to.length) {
    return false;
  }
  const uniquePairs: Set<string> = new Set();
  for (let i = 0; i < from.length; i++) {
    const letter: string = from[i];
    const character: string = to[i];
    const pair: string = letter + character;
    uniquePairs.add(pair);
  }
  const pairs = [...uniquePairs];
  for (let i = 0; i < pairs.length; i++) {
    const pair: string = pairs[i];
    const pairsWhitLetter: string[] = pairs.filter(
      (p) => p.includes(pair[0]) && p[0] === pair[0]
    );
    const pairsWhitCharacter: string[] = pairs.filter(
      (p) => p.includes(pair[1]) && p[1] === pair[1]
    );
    if (pairsWhitLetter.length > 1 || pairsWhitCharacter.length > 1) {
      return false;
    }
  }
  return true;
}

export { canReconfigure };

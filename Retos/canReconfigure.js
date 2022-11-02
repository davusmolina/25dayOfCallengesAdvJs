function canReconfigure(from, to) {
	if (typeof from !== 'string' || typeof to !== 'string') {
		throw new Error('Both first and second argument must be a string');
	}
	if (from.length !== to.length) {
		return false;
	}
	const uniquePairs = new Set();
	for (let i = 0; i < from.length; i++) {
		const letter = from[i];
		const character = to[i];
		const pair = letter + character;
		uniquePairs.add(pair);
	}
	const pairs = [...uniquePairs];
	for (let i = 0; i < pairs.length; i++) {
		const pair = pairs[i];
		const pairsWhitLetter = pairs.filter(
			(p) => p.includes(pair[0]) && p[0] === pair[0]
		);
		const pairsWhitCharacter = pairs.filter(
			(p) => p.includes(pair[1]) && p[1] === pair[1]
		);
		if (pairsWhitLetter.length > 1 || pairsWhitCharacter.length > 1) {
			return false;
		}
	}
	return true;
}

export { canReconfigure };

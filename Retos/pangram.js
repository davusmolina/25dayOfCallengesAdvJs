function pangram(letter) {
	if (typeof letter !== 'string') {
		throw new Error('The parameter must be a string');
	}
	const alphabet = 'abcdefghijklmnñopqrstvwxyz'.split('');
	const letterSplitted = letter
		.split('')
		.filter((character) => character !== ' ')
		.map((character) => character.toLowerCase());

	for (let i = 0; i < alphabet.length; i++) {
		const character = alphabet[i];
		if (!letterSplitted.includes(character)) {
			return false;
		}
	}
	return true;
}

export { pangram };

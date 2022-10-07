function letterIsValid(str) {
	if (typeof str !== 'string') {
		throw new Error('The argument must be a string');
	}
	if (str.includes('{') || str.includes('[')) {
		return false;
	}
	if (str.includes('()')) {
		return false;
	}
	if (str.includes('(') && !str.includes(')')) {
		return false;
	}

	const words = str.split(' ');
	let closeCorrectly = true;

	words.forEach((word) => {
		if (word.includes('(')) {
			if (word[0] === '(' && word[word.length - 1] === ')') {
				closeCorrectly = true;
			} else {
				closeCorrectly = false;
			}
		}
	});

	return closeCorrectly;
}
const letter = 'peluche (bici coche) bici coche balón';
console.log(letterIsValid(letter));
export { letterIsValid };

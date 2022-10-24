function decodeNumber(symbols) {
	if (typeof symbols !== 'string') {
		throw new Error('The argument must be a string');
	}
	let symbolsValues = {
		'.': 1,
		',': 5,
		':': 10,
		';': 50,
		'!': 100,
	};
	let decodedNumber = 0;
	let previous = 0;
	for (let i = 0; i < symbols.length; i++) {
		const symbol = symbols[i];

		if (!symbolsValues.hasOwnProperty(symbol)) {
			return NaN;
		}
		if (previous < symbolsValues[symbol]) {
			decodedNumber += symbolsValues[symbol];
			decodedNumber -= previous * 2;
		} else {
			decodedNumber += symbolsValues[symbol];
		}
		previous = symbolsValues[symbol];
	}

	return decodedNumber;
}

export { decodeNumber };

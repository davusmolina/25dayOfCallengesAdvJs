function sumPairs(numbers, result) {
	if (!Array.isArray(numbers)) {
		throw new Error('the first parameter must be a array');
	}
	numbers.forEach((number) => {
		if (typeof number !== 'number') {
			throw new Error('the first parameter must be a array of numbers');
		}
	});
	if (typeof result !== 'number') {
		throw new Error('the second parameter must be a number');
	}

	const res = [];
	numbers.forEach((number) => {
		numbers.forEach((number2) => {
			const sumIsResult = number + number2 === result;
			const isSamePosition =
				numbers.indexOf(number) !== numbers.indexOf(number2, number);
			if (sumIsResult && isSamePosition) {
				res.push(number, number2);
			}
		});
	});
	if (res.length === 0) {
		return null;
	}
	const nums = res.splice(0, 2);

	return nums;
}

export { sumPairs };

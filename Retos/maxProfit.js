function findMax(array) {
	let largest = 0;
	let largestIndex;
	array.forEach((num) => {
		if (num > largest) {
			largest = num;
			largestIndex = array.indexOf(num);
		}
	});
	return [largest, largestIndex];
}
function smallestToLeft(array, index) {
	let smallestToLeft = array[0];
	array.forEach((price) => {
		if (price < smallestToLeft) {
			const smallestIndex = array.indexOf(price);
			if (smallestIndex < index) {
				smallestToLeft = price;
			}
		}
	});
	return smallestToLeft;
}
function maxProfit(prices) {
	if (!Array.isArray(prices)) {
		throw new Error('The argument must be an array');
	}
	prices.forEach((price) => {
		if (typeof price !== 'number') {
			throw new Error('The argument must be an array of numbers');
		}
	});
	function findMax(array) {
		let largest = 0;
		let largestIndex;
		array.forEach((num) => {
			if (num > largest) {
				largest = num;
				largestIndex = array.indexOf(num);
			}
		});
		return [largest, largestIndex];
	}
	function smallestToLeft(array, index) {
		let smallestToLeft = array[0];
		array.forEach((price) => {
			if (price < smallestToLeft) {
				const smallestIndex = array.indexOf(price);
				if (smallestIndex < index) {
					smallestToLeft = price;
				}
			}
		});
		return smallestToLeft;
	}

	let [largestPrice, largestIndex] = findMax(prices);
	let smallestPriceToLeft = smallestToLeft(prices, largestIndex);

	while (largestPrice === smallestPriceToLeft) {
		prices.splice(largestIndex, 1);
		[largestPrice, largestIndex] = findMax(prices);
		smallestPriceToLeft = smallestToLeft(prices, largestIndex);
	}
	const profit = largestPrice - smallestPriceToLeft;

	if (isNaN(profit)) {
		return -1;
	}
	return profit;
}

export { maxProfit };

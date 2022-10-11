function isObject(variable) {
	return Object.prototype.toString.call(variable) === '[object Object]';
}

function flattenObject(object) {
	const storeValues = Object.values(object);
	const values = [];

	storeValues.forEach((value) => {
		if (isObject(value)) {
			values.push(flattenObject(value));
		} else {
			values.push(value);
		}
	});

	return values.flat(99);
}

function thereIsProduct(store, product) {
	if (typeof product !== 'string') {
		throw new Error('the second argument must be a string');
	}
	if (!isObject(store)) {
		throw new Error('the first argument must be a object');
	}

	const flattedStore = flattenObject(store);
	const productExists = flattedStore.some((element) => element === product);
	if (productExists) {
		return true;
	}
	return false;
}

export { thereIsProduct };

function groupBy(collection, it) {
	if (!Array.isArray(collection)) {
		throw new Error('the first argument must be a array');
	}
	if (typeof it !== 'function' && typeof it !== 'string') {
		throw new Error('The second argument must be a string or a function');
	}

	const set = new Set();
	collection.forEach((element) => {
		if (typeof it === 'function') {
			set.add(it(element));
		} else {
			set.add(element[it]);
		}
	});
	const values = [...set];

	const obj = {};
	collection.forEach((elem) => {
		values.forEach((element) => {
			let res;
			if (typeof it === 'function') {
				res = it(elem);
			} else {
				res = elem[it];
			}
			if (res === element) {
				if (Array.isArray(obj[element])) {
					obj[element] = [...obj[element], elem];
				} else {
					obj[element] = [elem];
				}
			}
		});
	});

	return obj;
}

export { groupBy };

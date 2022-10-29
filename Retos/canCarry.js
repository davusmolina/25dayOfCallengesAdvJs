function canCarry(capacity, trips) {
	if (typeof capacity !== 'number') {
		throw new Error('The first argument must be a number');
	}
	if (!Array.isArray(trips)) {
		throw new Error('The second argument must be an array');
	}

	let actualLoad = 0;
	const maxPointOfDelivery = trips[trips.length - 1][2];

	for (let point = 0; point < maxPointOfDelivery; point++) {
		for (let i = 0; i < trips.length; i++) {
			const numberOfGiftsToDelivery = trips[i][0];
			const collectionPoint = trips[i][1];
			const deliveryPoint = trips[i][2];
			if (point === collectionPoint) {
				actualLoad += numberOfGiftsToDelivery;
			}
			if (point === deliveryPoint) {
				actualLoad -= numberOfGiftsToDelivery;
			}
			if (actualLoad > capacity) {
				return false;
			}
		}
	}

	return true;
}

export { canCarry };

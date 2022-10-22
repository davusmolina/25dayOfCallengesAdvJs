function missingReindeer(ids) {
	if (!Array.isArray(ids)) {
		throw new Error('The argument must be an array');
	}
	ids.forEach((id) => {
		if (id > 100 || id < 0) {
			throw new Error('The ids must be greater than 0 or smaller at 101');
		}
	});
	const greaterId = Math.max(...ids);
	let missingReindeer;
	for (let i = 0; i < greaterId; i++) {
		if (!ids.some((id) => id === i)) {
			return (missingReindeer = i);
		}
	}
	missingReindeer = greaterId + 1;
	return missingReindeer;
}

export { missingReindeer };

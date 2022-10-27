function learn(time, courses) {
	if (typeof time !== 'number') {
		throw new Error('The first argument must be a number');
	}
	if (!Array.isArray(courses)) {
		throw new Error('The second argument must be an array');
	}

	const minorsThatTime = [];
	courses.forEach((timeCourseI, i) => {
		if (typeof timeCourseI !== 'number') {
			throw new Error('The second argument must be an array of numbers');
		}
		courses.forEach((timeCourseJ, j) => {
			const sumTiTj = timeCourseI + timeCourseJ;
			if (i !== j && sumTiTj <= time) {
				minorsThatTime.push([[i, j], sumTiTj]);
			}
		});
	});

	let betterTwoCourses;
	let biggest = 0;

	if (minorsThatTime.length === 0) {
		return null;
	}
	minorsThatTime.forEach((sumTime) => {
		if (sumTime[1] > biggest) {
			biggest = sumTime[1];
			betterTwoCourses = sumTime[0];
		}
	});
	return betterTwoCourses;
}

export { learn };

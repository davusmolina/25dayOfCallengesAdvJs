function getMinJump(obstacles, jump) {
	if (!Array.isArray(obstacles)) {
		throw new Error('The argument must be a array');
	}

	isNaN(jump) ? (jump = 1) : jump;

	const max = Math.max(...obstacles);
	let includesObstacles;

	for (let i = jump; i <= max; i += jump) {
		obstacles.includes(i)
			? (includesObstacles = true)
			: (includesObstacles = false);
		if (includesObstacles === true) {
			break;
		}
	}
	if (!includesObstacles) {
		console.log(obstacles);
		console.log('jump = ' + jump);
		return jump;
	} else {
		jump += 1;
		jump = getMinJump(obstacles, jump);
	}
	return jump;
}
export { getMinJump };

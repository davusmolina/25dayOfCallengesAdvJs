function canMouseEat(direction, game) {
	if (typeof direction !== 'string') {
		throw new Error('The first argument must be a string');
	}
	if (!Array.isArray(game)) {
		throw new Error('The second argument must be an array');
	}

	let mousePosition = [];

	game.forEach((row, rowIndex) => {
		row.forEach((space, spaceIndex) => {
			if (space === 'm') {
				mousePosition.push(rowIndex, spaceIndex);
			}
		});
	});
	const directions = {};
	if (mousePosition[1] > 0) {
		directions['left'] = game[mousePosition[0]][mousePosition[1] - 1];
	}
	if (mousePosition[1] < game[0].length - 1) {
		directions['right'] = game[mousePosition[0]][mousePosition[1] + 1];
	}
	if (mousePosition[0] > 0) {
		directions['up'] = game[mousePosition[0] - 1][mousePosition[1]];
	}
	if (mousePosition[0] < game.length - 1) {
		directions['down'] = game[mousePosition[0] + 1][mousePosition[1]];
	}

	if (directions[direction] === '*') {
		return true;
	}
	return false;
}

export { canMouseEat };

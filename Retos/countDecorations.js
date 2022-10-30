function countDecorations(bigTree) {
	if (Object.prototype.toString.call(bigTree) !== '[object Object]') {
		throw new Error('The argument must be a object');
	}
	let numberOfDecorations = bigTree.value;
	if (bigTree.left !== null) {
		numberOfDecorations += countDecorations(bigTree.left);
	}
	if (bigTree.right !== null) {
		numberOfDecorations += countDecorations(bigTree.right);
	}

	return numberOfDecorations;
}

export { countDecorations };

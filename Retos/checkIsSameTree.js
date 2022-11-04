function checkIsSameTree(treeA, treeB) {
	const isObject = (object) => {
		return Object.prototype.toString.call(object) === '[object Object]';
	};
	if (!isObject(treeA) || !isObject(treeB)) {
		throw new Error('Both the first and the second argument must be an object');
	}

	const valueIsEqual = treeA.value === treeB.value;

	const bothLeftAreObject = isObject(treeA.left) && isObject(treeB.left);
	const bothLeftAreNull = treeA.left === null && treeB.left === null;

	const bothRightAreObject = isObject(treeA.right) && isObject(treeB.right);
	const bothRightAreNull = treeA.right === null && treeB.right === null;

	const areNotEqualsLeft = !bothRightAreNull && !bothRightAreObject;
	const areNotEqualsRight = !bothLeftAreNull && !bothLeftAreObject;

	if (areNotEqualsLeft || areNotEqualsRight || !valueIsEqual) {
		return false;
	}
	let areEquals = true;

	if (bothLeftAreObject) {
		areEquals = checkIsSameTree(treeA.left, treeB.left);
	}
	if (!areEquals) {
		return false;
	}
	if (bothRightAreObject) {
		areEquals = checkIsSameTree(treeA.right, treeB.right);
	}

	return areEquals;
}
export { checkIsSameTree };

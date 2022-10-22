function wrapGifts(gifts) {
	if (!Array.isArray(gifts)) {
		throw new Error('The argument must be a array');
	}
	if (gifts.length === 0) {
		return [];
	}
	let totalLength;
	const wrappedGifts = [];
	gifts.forEach((ele) => {
		totalLength = ele.length;
		wrappedGifts.push('*' + ele + '*');
	});
	wrappedGifts.unshift('*'.repeat(totalLength + 2));
	wrappedGifts.push('*'.repeat(totalLength + 2));
	return wrappedGifts;
}

export { wrapGifts };

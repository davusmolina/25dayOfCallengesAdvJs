function countGifts(letter) {
	if (typeof letter !== 'string') {
		throw new Error('letter must be a string');
	}

	const gifts = letter.split(' ');

	console.log(gifts);

	const listGifts = {};

	gifts.forEach((gift) => {
		const listHasGift = listGifts.hasOwnProperty(gift);

		if (!gift.includes('_') && !listHasGift && gift !== '') {
			listGifts[gift] = 0;
		}
	});

	gifts.forEach((gift) => {
		if (listGifts.hasOwnProperty(gift)) {
			listGifts[gift] += 1;
		}
	});

	return listGifts;
}

const carta =
	'bici     coche balón       _playstation          bici coche peluche';

countGifts(carta);

export { countGifts };

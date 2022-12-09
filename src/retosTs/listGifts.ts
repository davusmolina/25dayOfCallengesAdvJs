function countGifts(letter: string): Record<string, number> {
  const gifts: string[] = letter.split(' ');
  const listGifts: Record<string, number> = {};

  gifts.forEach((gift: string) => {
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

export { countGifts };

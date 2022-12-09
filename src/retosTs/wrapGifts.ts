function wrapGifts(gifts: string[]): string[] {
  if (gifts.length === 0) {
    return [];
  }
  let totalLength: number = 0;
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

function decodeNumber(symbols: string): number | typeof NaN {
  let symbolsValues = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100,
  };
  let decodedNumber = 0;
  let previous = 0;
  for (let i = 0; i < symbols.length; i++) {
    const symbol: string = symbols[i];

    if (!symbolsValues.hasOwnProperty(symbol)) {
      return NaN;
    }

    let symbolValue = symbolsValues[symbol as keyof typeof symbolsValues];

    if (previous < symbolValue) {
      decodedNumber += symbolValue;
      decodedNumber -= previous * 2;
    } else {
      decodedNumber += symbolValue;
    }
    previous = symbolValue;
  }

  return decodedNumber;
}

export { decodeNumber };

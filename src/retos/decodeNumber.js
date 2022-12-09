"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeNumber = void 0;
function decodeNumber(symbols) {
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
        const symbol = symbols[i];
        if (!symbolsValues.hasOwnProperty(symbol)) {
            return NaN;
        }
        let symbolValue = symbolsValues[symbol];
        if (previous < symbolValue) {
            decodedNumber += symbolValue;
            decodedNumber -= previous * 2;
        }
        else {
            decodedNumber += symbolValue;
        }
        previous = symbolValue;
    }
    return decodedNumber;
}
exports.decodeNumber = decodeNumber;

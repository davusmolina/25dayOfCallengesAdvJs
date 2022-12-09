"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.letterIsValid = void 0;
function letterIsValid(str) {
    if (str.includes('{') || str.includes('['))
        return false;
    if (str.includes('()'))
        return false;
    if (str.includes('(') && !str.includes(')'))
        return false;
    const words = str.split(' ');
    let closeCorrectly = true;
    words.forEach((word) => {
        if (word.includes('(')) {
            if (!(word[0] === '(' && word[word.length - 1] === ')')) {
                closeCorrectly = false;
            }
        }
    });
    return closeCorrectly;
}
exports.letterIsValid = letterIsValid;

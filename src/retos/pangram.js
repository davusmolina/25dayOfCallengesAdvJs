"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pangram = void 0;
function pangram(letter) {
    const alphabet = 'abcdefghijklmnñopqrstvwxyz'.split('');
    const letterSplitted = letter
        .split('')
        .filter((character) => character !== ' ')
        .map((character) => character.toLowerCase());
    for (let i = 0; i < alphabet.length; i++) {
        const character = alphabet[i];
        if (!letterSplitted.includes(character)) {
            return false;
        }
    }
    return true;
}
exports.pangram = pangram;

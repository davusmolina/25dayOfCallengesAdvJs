"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countGifts = void 0;
function countGifts(letter) {
    const gifts = letter.split(' ');
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
exports.countGifts = countGifts;

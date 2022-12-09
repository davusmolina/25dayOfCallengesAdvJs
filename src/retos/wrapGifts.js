"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapGifts = void 0;
function wrapGifts(gifts) {
    if (gifts.length === 0) {
        return [];
    }
    let totalLength = 0;
    const wrappedGifts = [];
    gifts.forEach((ele) => {
        totalLength = ele.length;
        wrappedGifts.push('*' + ele + '*');
    });
    wrappedGifts.unshift('*'.repeat(totalLength + 2));
    wrappedGifts.push('*'.repeat(totalLength + 2));
    return wrappedGifts;
}
exports.wrapGifts = wrapGifts;

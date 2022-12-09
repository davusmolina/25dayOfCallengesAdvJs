"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countDecorations = void 0;
function countDecorations(bigTree) {
    let numberOfDecorations = bigTree.value;
    if (bigTree.left !== null) {
        numberOfDecorations += countDecorations(bigTree.left);
    }
    if (bigTree.right !== null) {
        numberOfDecorations += countDecorations(bigTree.right);
    }
    return numberOfDecorations;
}
exports.countDecorations = countDecorations;

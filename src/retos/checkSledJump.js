"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSledJump = void 0;
function checkSledJump(heights) {
    if (heights.length < 3) {
        throw new Error('The length array must be greater than 2');
    }
    const maxHeight = Math.max(...heights);
    const maxHeightIndex = heights.indexOf(maxHeight);
    if (maxHeightIndex + 1 === heights.length || maxHeightIndex === 0) {
        return false;
    }
    let previousUp = -1;
    let previousDown = maxHeight;
    for (let i = 0; i < heights.length; i++) {
        const height = heights[i];
        if (i < maxHeightIndex) {
            if (height <= previousUp) {
                return false;
            }
            previousUp = height;
        }
        else if (i >= maxHeightIndex) {
            if (height > previousDown) {
                return false;
            }
            previousDown = height;
        }
    }
    return true;
}
exports.checkSledJump = checkSledJump;

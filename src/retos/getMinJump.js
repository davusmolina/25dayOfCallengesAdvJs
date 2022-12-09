"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMinJump = void 0;
function getMinJump(obstacles, jump) {
    isNaN(jump) ? (jump = 1) : jump;
    const max = Math.max(...obstacles);
    let includesObstacles;
    for (let i = jump; i <= max; i += jump) {
        obstacles.includes(i)
            ? (includesObstacles = true)
            : (includesObstacles = false);
        if (includesObstacles === true) {
            break;
        }
    }
    if (!includesObstacles) {
        return jump;
    }
    else {
        jump += 1;
        jump = getMinJump(obstacles, jump);
    }
    return jump;
}
exports.getMinJump = getMinJump;

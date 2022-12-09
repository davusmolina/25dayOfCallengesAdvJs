"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.missingReindeer = void 0;
function missingReindeer(ids) {
    ids.forEach((id) => {
        if (id > 100 || id < 0) {
            throw new Error('The ids must be greater than 0 or smaller at 101');
        }
    });
    const greaterId = Math.max(...ids);
    let missingReindeer;
    for (let i = 0; i < greaterId; i++) {
        if (!ids.some((id) => id === i)) {
            return (missingReindeer = i);
        }
    }
    missingReindeer = greaterId + 1;
    return missingReindeer;
}
exports.missingReindeer = missingReindeer;

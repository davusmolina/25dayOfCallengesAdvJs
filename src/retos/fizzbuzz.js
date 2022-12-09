"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fizzBuzz = void 0;
function fizzBuzz(a) {
    if (a % 3 === 0 && a % 5 === 0) {
        return 'fizzBuzz';
    }
    if (a % 3 === 0) {
        return 'fizz';
    }
    if (a % 5 === 0) {
        return 'buzz';
    }
    return 1;
}
exports.fizzBuzz = fizzBuzz;

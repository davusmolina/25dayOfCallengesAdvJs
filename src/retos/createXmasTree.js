"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createXmasTree = void 0;
function createXmasTree(height) {
    if (height > 100 || height < 1) {
        throw new Error('the argument must be a number between 1 and 100');
    }
    let tree = '\n';
    let totalCharacters = 1;
    for (let i = 0; i < height - 1; i++) {
        totalCharacters = totalCharacters + 2;
    }
    let impares = 1;
    for (let i = 0; i < height; i++) {
        let underScores = '_'.repeat((totalCharacters - impares) / 2);
        let linea = underScores + '*'.repeat(impares) + underScores;
        tree += linea + '\n';
        impares += 2;
    }
    let trunk = '';
    for (let i = 0; i < totalCharacters; i++) {
        const center = totalCharacters / 2 - 0.5;
        if (i === center) {
            trunk += '#';
        }
        else {
            trunk += '_';
        }
    }
    tree += trunk + '\n' + trunk;
    return tree;
}
exports.createXmasTree = createXmasTree;
createXmasTree(3);

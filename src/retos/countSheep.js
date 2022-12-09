"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countSheep = void 0;
function countSheep(ovejas) {
    const sheepInRed = ovejas.filter((oveja) => oveja.color === 'rojo');
    const sheepFiltered = sheepInRed.filter((oveja) => {
        let nameLc = oveja.name.toLowerCase();
        return nameLc.includes('a') && nameLc.includes('n');
    });
    return sheepFiltered;
}
exports.countSheep = countSheep;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupBy = void 0;
function groupBy(collection, it) {
    const set = new Set();
    collection.forEach((element) => {
        if (typeof it === 'function') {
            set.add(it(element));
        }
        else {
            set.add(element[it]);
        }
    });
    const values = [...set];
    const obj = {};
    collection.forEach((elem) => {
        values.forEach((element) => {
            let res;
            if (typeof it === 'function') {
                res = it(elem);
            }
            else {
                res = elem[it];
            }
            if (res === element) {
                if (Array.isArray(obj[element])) {
                    obj[element].push(elem);
                }
                else {
                    obj[element] = [elem];
                }
            }
        });
    });
    return obj;
}
exports.groupBy = groupBy;

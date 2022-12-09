"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.thereIsProduct = void 0;
function isObject(variable) {
    return Object.prototype.toString.call(variable) === '[object Object]';
}
function flattenObject(object) {
    const storeValues = Object.values(object);
    const values = [];
    storeValues.forEach((value) => {
        if (isObject(value)) {
            values.push(flattenObject(value));
        }
        else {
            values.push(value);
        }
    });
    return values.flat(99);
}
function thereIsProduct(store, product) {
    const flattedStore = flattenObject(store);
    const productExists = flattedStore.some((element) => element === product);
    if (productExists) {
        return true;
    }
    return false;
}
exports.thereIsProduct = thereIsProduct;

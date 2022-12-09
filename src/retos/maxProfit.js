"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxProfit = void 0;
function findMax(array) {
    let largest = -1;
    let largestIndex = -1;
    array.forEach((num) => {
        if (num > largest) {
            largest = num;
            largestIndex = array.indexOf(num);
        }
    });
    return [largest, largestIndex];
}
function smallestToLeft(array, index) {
    let smallestToLeft = array[0];
    array.forEach((price) => {
        if (price < smallestToLeft) {
            const smallestIndex = array.indexOf(price);
            if (smallestIndex < index) {
                smallestToLeft = price;
            }
        }
    });
    return smallestToLeft;
}
function maxProfit(prices) {
    let [largestPrice, largestIndex] = findMax(prices);
    let smallestPriceToLeft = smallestToLeft(prices, largestIndex);
    while (largestPrice === smallestPriceToLeft) {
        prices.splice(largestIndex, 1);
        [largestPrice, largestIndex] = findMax(prices);
        smallestPriceToLeft = smallestToLeft(prices, largestIndex);
    }
    const profit = largestPrice - smallestPriceToLeft;
    if (isNaN(profit)) {
        return -1;
    }
    return profit;
}
exports.maxProfit = maxProfit;

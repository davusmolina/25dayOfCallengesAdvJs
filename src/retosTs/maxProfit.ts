function findMax(array: number[]): number[] {
  let largest = -1;
  let largestIndex: number = -1;
  array.forEach((num) => {
    if (num > largest) {
      largest = num;
      largestIndex = array.indexOf(num);
    }
  });
  return [largest, largestIndex];
}
function smallestToLeft(array: number[], index: number): number {
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
function maxProfit(prices: number[]): number {
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

export { maxProfit };

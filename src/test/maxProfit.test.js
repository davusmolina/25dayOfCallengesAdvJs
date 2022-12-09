import { describe, it } from "vitest";
import { expect } from "chai";
import { maxProfit } from "../Retos/maxProfit";

// Difficulty: Normal
// maxProfit is a function that receives the price list of a cryptocurrency in a day
// and return the maximum profit we could make if we buy and sell the investment on the same day.

// The price list is an array of numbers and represents time from left to right.
// So keep in mind that you cannot buy at a price that is to the right of the sell
// and you cannot sell at a price that is to the left of the buy.

describe("test for maxProfit", () => {
  it("maxProfit([39, 18, 29, 25, 34, 32, 5]) must return 16", () => {
    const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
    expect(maxProfit(pricesBtc)).toBe(16);
  });
  it("maxProfit([10, 20, 30, 40, 50, 60, 70]) must return 60", () => {
    const pricesEth = [10, 20, 30, 40, 50, 60, 70];
    expect(maxProfit(pricesEth)).toBe(60);
  });
  it("must return -1 when there is not profit", () => {
    const pricesDoge = [18, 15, 12, 11, 9, 7];
    const pricesAda = [3, 3, 3, 3, 3];
    const pricesNano = [6, 5, 4, 3];

    expect(maxProfit(pricesDoge)).toBe(-1);
    expect(maxProfit(pricesAda)).toBe(-1);
    expect(maxProfit(pricesNano)).toBe(-1);
  });
});

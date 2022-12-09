import { expect } from "chai";
import { describe, it } from "vitest";
import { getCoins } from "../Retos/getCoins";

// Difficulty: Hard
// The store manage coins of 1, 2, 5, 10, 20, 50 cents
// getCoins is a function that receives the number of cents to be returned to the customer
// and the function gives us an array with the minimum combination of coins we must use to get it.

describe("tests for getCoins: return the number of coins to be returned", () => {
  it("getCoins(51) must return [1, 0, 0, 0, 0, 1]", () => {
    expect(getCoins(51)).toStrictEqual([1, 0, 0, 0, 0, 1]);
  });
  it("getCoins(3) must return [1, 1, 0, 0, 0, 0]", () => {
    expect(getCoins(3)).toStrictEqual([1, 1, 0, 0, 0, 0]);
  });
  it("getCoins(5) must return [0, 0, 1, 0, 0, 0]", () => {
    expect(getCoins(5)).toStrictEqual([0, 0, 1, 0, 0, 0]);
  });
  it("getCoins(16) must return [1, 0, 1, 1, 0, 0]", () => {
    expect(getCoins(16)).toStrictEqual([1, 0, 1, 1, 0, 0]);
  });
  it("getCoins(100) must return [0, 0, 0, 0, 0, 2]", () => {
    expect(getCoins(100)).toStrictEqual([0, 0, 0, 0, 0, 2]);
  });
});

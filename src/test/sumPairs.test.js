import { describe, it } from "vitest";
import { expect } from "chai";
import { sumPairs } from "../Retos/sumPairs";

// Difficulty: Normal
// A function is given two parameters: an Array with numbers and the expected result.
// The function must return the two values of the Array that add up to the expected result.
// Since there can sometimes be more than two values that add up, the first one starting from the left that finds another pair will be returned, no matter how far to the right.
// If there are not two numbers that sum the expected result it must return null

describe("sumPairs() tests, the two numbers of the response must sum the number of the second parameter", () => {
  it("sumPairs([3, 5, 7, 2], 10) must be equal to ([3, 7])", () => {
    expect(sumPairs([3, 5, 7, 2], 10)).toEqual([3, 7]);
  });
  it("sumPairs([2, 2, 3, 1], 4) must be equal to ([2, 2]);", () => {
    expect(sumPairs([2, 2, 3, 1], 4)).toEqual([2, 2]);
  });
  it("sumPairs([0, 2, 2, 3, -1, 1, 5], 6) must be equal to ([1, 5]);", () => {
    expect(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)).toEqual([1, 5]);
  });
  it("sumPairs([-3, -2, 7, -5], 10) must return null", () => {
    expect(sumPairs([-3, -2, 7, -5], 10)).toBe(null);
  });
});

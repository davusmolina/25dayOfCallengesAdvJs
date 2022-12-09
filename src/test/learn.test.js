import { expect } from "chai";
import { describe, it } from "vitest";
import { learn } from "../Retos/learn";

// Difficulty: Normal
// We need to create a function that receives two parameters.
// The first is the number of hours we have available ⏳ and the second is an array
// where each index is a course and the value the time it takes to complete.

describe("test for learn, learn() should return an array whit the two longest courses which sum is lower that the time of the student", () => {
  it("learn(10, [2, 3, 8, 1, 4]) must return [0, 2]", () => {
    expect(learn(10, [2, 3, 8, 1, 4])).toStrictEqual([0, 2]);
  });
  it("learn(15, [2, 10, 4, 1]) must return [1, 2]", () => {
    expect(learn(15, [2, 10, 4, 1])).toStrictEqual([1, 2]);
  });
  it("learn(25, [10, 15, 20, 5])) must return [0, 1]", () => {
    expect(learn(25, [10, 15, 20, 5])).toStrictEqual([0, 1]);
  });
  it("learn(4, [10, 14, 20]) must return null", () => {
    expect(learn(4, [10, 14, 20])).toBe(null);
  });
  it("learn(5, [5, 5, 5])) must return null", () => {
    expect(learn(5, [5, 5, 5])).toBe(null);
  });
});

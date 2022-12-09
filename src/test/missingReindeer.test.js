import { describe, it } from "vitest";
import { expect } from "chai";
import { missingReindeer } from "../Retos/missingReindeer";

// Difficulty: Normal
// There is a inventory of reindeers and one is missing. Each reindeer has an id in a array.
// The ids are numbers that can go from 0 to 100, they are not repeated and only one reindeer is missing.
// The list is out of order and could be missing the last one....

// We need a function that when we pass it the list of reindeer ids tells us immediately which one is missing:

describe("tests for missingReindeer", () => {
  it("The ids must be greater than 0 or smaller at 101", () => {
    expect(() => missingReindeer([121, -1])).toThrow(
      "The ids must be greater than 0 or smaller at 101"
    );
  });
  it("missingReindeer([0, 2, 3]) must return 1", () => {
    const res = missingReindeer([0, 2, 3]);
    expect(res).toBe(1);
  });
  it("missingReindeer([5, 6, 1, 2, 3, 7, 0]) must return 4", () => {
    const res = missingReindeer([5, 6, 1, 2, 3, 7, 0]);
    expect(res).toBe(4);
  });
  it("missingReindeer([0, 1]) must return 2", () => {
    const res = missingReindeer([0, 1]);
    expect(res).toBe(2);
  });
  it("missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) must return 8", () => {
    const res = missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]);
    expect(res).toBe(8);
  });
  it("missingReindeer([3, 0, 1]) must return 2", () => {
    const res = missingReindeer([3, 0, 1]);
    expect(res).toBe(2);
  });
  it("missingReindeer([0]) must return 1", () => {
    const res = missingReindeer([0]);
    expect(res).toBe(1);
  });
});

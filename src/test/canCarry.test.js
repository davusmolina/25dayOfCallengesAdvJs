import { describe, it } from "vitest";
import { expect } from "chai";
import { canCarry } from "../retosTs/canCarry";

// Difficulty: Hard
// canCarry is a function that must verify if in some moment a sled exceed the capacity. It receives two parameters:
// A number with the maximum capacity of gifts in the sled.
// The trip which is an array of arrays. Each subarray contains three numbers that represent:
// trip[0] = number of gifts to be transported.
// trip[1] = pickup point of the gifts
// trip[2] = drop-off point for the gifts

describe("tests for canCarry: it must return true if the trip do not exceed the maximum capacity sled, false otherwise", () => {
  describe("mus return false in this cases:", () => {
    it("canCarry(4, [[2, 5, 8], [3, 6, 10]])", () => {
      expect(
        canCarry(4, [
          [2, 5, 8],
          [3, 6, 10],
        ])
      ).toBe(false);
    });
    it("canCarry(4, [[2, 3, 8],])", () => {
      expect(canCarry(1, [[2, 3, 8]])).toBe(false);
    });
  });
  describe("must return true in this cases:", () => {
    it("canCarry(3, [[1, 1, 5], [2, 2, 10]])", () => {
      expect(
        canCarry(3, [
          [1, 1, 5],
          [2, 2, 10],
        ])
      ).toBe(true);
    });
    it("canCarry(3, [[2, 1, 5], [3, 5, 7]])", () => {
      expect(
        canCarry(3, [
          [2, 1, 5],
          [3, 5, 7],
        ])
      ).toBe(true);
    });
  });
});

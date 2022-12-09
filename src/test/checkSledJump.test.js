import { describe, it } from "vitest";
import { expect } from "chai";
import { checkSledJump } from "../Retos/checkSledJump";

//Difficulty: Normal
// there is a sled that is flying and we are adjusting the motor so that it makes the best possible parabolas.
// For this, the jump must always be upwards and, from the highest point, it must always descend downwards.
// the jumps can be seen as arrays... and that we only have to make sure that the numbers
// go up and down correctly. It also warns us that we will only pass arrays of at least three positions.
describe("tests for checkSledJump", () => {
  it("The length array must be greater than 2", () => {
    expect(() => checkSledJump([121, 1])).toThrow(
      "The length array must be greater than 2"
    );
  });

  describe("the sled goes up and down in a strict way", () => {
    it("checkSledJump([1, 2, 3, 2, 1]) must return true", () => {
      expect(checkSledJump([1, 2, 3, 2, 1])).toBe(true);
    });
    it("checkSledJump([0, 1, 0])) must return true", () => {
      expect(checkSledJump([0, 1, 0])).toBe(true);
    });
    it("checkSledJump([0, 3, 2, 1]) must return true", () => {
      expect(checkSledJump([0, 3, 2, 1])).toBe(true);
    });
    it("checkSledJump([0, 1000, 1]) must return true", () => {
      expect(checkSledJump([0, 1000, 1])).toBe(true);
    });
  });
  describe("the sled does not go up and down in a strict way", () => {
    it("checkSledJump([2, 4, 4, 6, 2]) does not rise strictly", () => {
      expect(checkSledJump([2, 4, 4, 6, 2])).toBe(false);
    });
    it("checkSledJump([1, 2, 3]))) only goes up", () => {
      expect(checkSledJump([1, 2, 3])).toBe(false);
    });
    it("checkSledJump([1, 2, 3, 2, 1, 2, 3]) the sled goes up and down and up again", () => {
      expect(checkSledJump([1, 2, 3, 2, 1, 2, 3])).toBe(false);
    });
  });
});

import { describe, it } from "vitest";
import { expect } from "chai";
import { getMinJump } from "../Retos/getMinJump";

// Difficulty: Hard
// There is a route (an array in which position 0 to x) with obstacles (an array with the index of the obstacles)
// and a sled that need pass this route, the sled must jump always the same distance.
// Each jump must fall in a space without obstacles
// getMinJump is a function that tells us the minimum length of the sled jump to avoid all the obstacles on the route.

describe("tests for getMinJump, must return the length of the jump", () => {
  it("obstacles = [5, 3, 6, 7, 9] return 4", () => {
    const obstacles = [5, 3, 6, 7, 9];
    expect(getMinJump(obstacles)).toBe(4);
  });

  it("obstacles = [2, 4, 6, 8, 10] return 7", () => {
    const obstacles = [2, 4, 6, 8, 10];
    expect(getMinJump(obstacles)).toBe(7);
  });
  it("obstacles = [1, 2, 3, 5] return 4", () => {
    const obstacles = [1, 2, 3, 5];
    expect(getMinJump(obstacles)).toBe(4);
  });
  it("obstacles = [3, 7, 5] return 2", () => {
    const obstacles = [3, 7, 5];
    expect(getMinJump(obstacles)).toBe(2);
  });
  it("obstacles = [9, 5, 1] return 2", () => {
    const obstacles = [9, 5, 1];
    expect(getMinJump(obstacles)).toBe(2);
  });
});

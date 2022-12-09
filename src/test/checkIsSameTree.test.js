import { describe, it } from "vitest";
import { expect } from "chai";
import { checkIsSameTree } from "../Retos/checkIsSameTree";

// Difficulty: Normal
// We are going to make a function that tells us if two binary trees(objects with value, right and left branch) are the same.
// We have to see if both trees have the same structure and the same values in all the branches.
describe("tests for checkIsSameTree", () => {
  const tree = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null },
  };
  const tree2 = {
    value: 1,
    left: {
      value: 3,
      left: { value: 2, left: null, right: null },
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: { value: 4, left: null, right: null },
    },
  };
  const tree3 = {
    value: 1,
    left: null,
    right: {
      value: 5,
      left: null,
      right: { value: 4, left: null, right: null },
    },
  };
  const tree4 = {
    value: 1,
    left: null,
    right: null,
  };
  // {
  //   value: 5,
  //   left: null,
  //   right: { value: 4, left: null, right: null },
  // }
  it("checkIsSameTree(tree, tree) must return true if both trees are equals", () => {
    expect(checkIsSameTree(tree, tree)).toBe(true);
  });
  it("checkIsSameTree(tree2, tree2) must return true if both trees are equals", () => {
    expect(checkIsSameTree(tree2, tree2)).toBe(true);
  });
  it("checkIsSameTree(tree, tree2) must return false if both trees are not equals", () => {
    expect(checkIsSameTree(tree, tree2)).toBe(false);
  });
  it("checkIsSameTree(tree3, tree4) must return false if both trees are not equals", () => {
    expect(checkIsSameTree(tree3, tree4)).toBe(false);
  });
});

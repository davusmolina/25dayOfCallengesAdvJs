import { describe, it } from "vitest";
import { expect } from "chai";
import { countDecorations } from "../Retos/countDecorations";

//Difficulty: Normal
// We need a function that passing a binary tree(object with value, right and left branch) tells us the number of decorations we need.
// For it we have an object that would be the representation of the tree and
// that indicates us in each level the number of branches to decorate.
describe("tests for countDecorations", () => {
  it("countDecorations must return the number of decorations that the Christmas tree need", () => {
    const tree = {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    };
    expect(countDecorations(tree)).toBe(6);
  });
  it("countDecorations must return the number of decorations that the Christmas tree need", () => {
    const bigTree = {
      value: 1,
      left: {
        value: 5,
        left: {
          value: 7,
          left: {
            value: 3,
            left: null,
            right: null,
          },
          right: null,
        },
        right: null,
      },
      right: {
        value: 6,
        left: {
          value: 5,
          left: null,
          right: null,
        },
        right: {
          value: 1,
          left: null,
          right: null,
        },
      },
    };
    expect(countDecorations(bigTree)).toBe(28);
  });
});

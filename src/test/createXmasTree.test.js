import { describe, it } from "vitest";
import { expect } from "chai";
import { createXmasTree } from "../Retos/createXmasTree";

// Difficulty: Normal
// createXmasTree() is a function that receives the height of the tree, which will be a positive integer from 1 to at most 100.
// createXmasTree() must return a string with line break to create a tree starting whit one asterisk and doing a triangle up to down, so the second line must have two asterisk.
// The remaining spaces must be cover whit _ in each line.
// The trunk of the tree must be just a # in two lines.
describe("Tests for createXmasTree", () => {
  it("must throw a error when the argument is not a number between 1 and 100", () => {
    expect(() => createXmasTree(0)).toThrow(
      "the argument must be a number between 1 and 100"
    );
  });
  it("must return equals number of lines to the  height plus two lines of the body tree trunk", () => {
    const tree = "\n__*__\n_***_\n*****\n__#__\n__#__";
    expect(createXmasTree(3)).toEqual(tree);
  });
});

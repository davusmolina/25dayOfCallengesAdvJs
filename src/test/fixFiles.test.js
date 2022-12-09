import { expect } from "chai";
import { describe, it } from "vitest";
import { fixFiles } from "../Retos/fixFiles";

// Difficulty: Easy
// fixFiles is a function that when passing us an array of file names it return
// an array with the same number of elements but where the names that were repeated
// are appended at the end (k) where k would be the number of times it was found repeated.
describe("tests for fixFiles", () => {
  it("should return the array whit the files listed", () => {
    const files = ["photo", "postcard", "photo", "photo", "video"];
    const fixedFiles = ["photo", "postcard", "photo(1)", "photo(2)", "video"];
    expect(fixFiles(files)).toStrictEqual(fixedFiles);
  });
  it("should return the array whit the files listed", () => {
    const files2 = ["file", "file", "file", "game", "game"];
    const fixedFiles = ["file", "file(1)", "file(2)", "game", "game(1)"];
    expect(fixFiles(files2)).toStrictEqual(fixedFiles);
  });
  it("should return the array whit the files listed", () => {
    const files3 = ["file", "file(1)", "icon", "icon(1)", "icon(1)"];
    const fixedFiles = ["file", "file(1)", "icon", "icon(1)", "icon(1)(1)"];
    expect(fixFiles(files3)).toStrictEqual(fixedFiles);
  });
});

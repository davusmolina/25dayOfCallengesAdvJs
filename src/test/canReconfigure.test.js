import { describe, it } from "vitest";
import { expect } from "chai";
import { canReconfigure } from "../Retos/canReconfigure";

// Difficulty: Very Hard
// canReconfigure receive a string. We need change this string for other
// when replacing the character, the order must be maintained, the same character cannot be assigned to two
// different letters (but can be assigned to itself) and, of course, the length of the string must be the same.
describe("tests for canReconfigure", () => {
  it('canReconfigure must return true if the argument "to" have the same length', () => {
    expect(canReconfigure("DMW", "KLkk")).toBe(false);
  });

  it("canReconfigure must return false if the same letter(element of first argument) is assigned to more than one character(element of second argument)", () => {
    expect(canReconfigure("XBOX", "XXBO")).toBe(false);
  });
  it("canReconfigure must return false if the same letter(element of first argument) is assigned to more than one character(element of second argument)", () => {
    expect(canReconfigure("MMM", "MID")).toBe(false);
  });
  it("canReconfigure must return false if the same character is assigned to more than one letter", () => {
    expect(canReconfigure("CON", "JUU")).toBe(false);
  });
  it('canReconfigure must return true if the argument "to" have the same length, the same character only is assigned to one letter and have to maintain the order of transformation', () => {
    expect(canReconfigure("XBOX", "XOBX")).toBe(true);
  });
  it('canReconfigure must return true if the argument "to" have the same length, the same character only is assigned to one letter and have to maintain the order of transformation', () => {
    expect(canReconfigure("BAL", "LIB")).toBe(true);
  });
});

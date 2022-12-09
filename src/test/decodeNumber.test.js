import { describe, it } from "vitest";
import { expect } from "chai";
import { decodeNumber } from "../Retos/decodeNumber";

// Difficulty: Easy
// There is a document containing a series of numbers that can be used to decipher them:
// Symbol Value
// .             1
// ,             5
// :             10
// ;             50
// !             100
// Symbols are subtracted if they are immediately to the left of a larger symbol.
// decodeNumber passes us a text string with symbols and we have to transform it to the correct number.
// If we find a symbol that we don't understand, we must return a NaN.

describe("tests for decodeNumber: decodeNumber must return the translate of symbols to numbers", () => {
  it("decodeNumber('...') must return 3", () => {
    expect(decodeNumber("...")).toBe(3);
  });
  it("decodeNumber('.,') must return 3", () => {
    expect(decodeNumber(".,")).toBe(4);
  });
  it("decodeNumber(',.') must return 3", () => {
    expect(decodeNumber(",.")).toBe(6);
  });
  it("decodeNumber(',...') must return 3", () => {
    expect(decodeNumber(",...")).toBe(8);
  });
  it("decodeNumber('!!!') must return 3", () => {
    expect(decodeNumber("!!!")).toBe(300);
  });
  it("decodeNumber('.;!') must return 3", () => {
    expect(decodeNumber(".;!")).toBe(49);
  });
  it("decodeNumber('..,!') must return 3", () => {
    expect(decodeNumber("..,!")).toBe(95);
  });
  it("decodeNumber('.........!') must return 3", () => {
    expect(decodeNumber(".........!")).toBe(107);
  });
  it("decodeNumber('..,') must return 3", () => {
    expect(decodeNumber("..,")).toBe(5);
  });

  it("decodeNumber(';!') must return 3", () => {
    expect(decodeNumber(";!")).toBe(50);
  });
  it("decodeNumber('6;.') must return NaN", () => {
    expect(decodeNumber("6;.")).toBe(NaN);
  });
});

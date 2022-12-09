import { describe, it } from "vitest";
import { expect } from "chai";
import { letterIsValid } from "../retos/letterIsValid";

// Difficulty: Normal
// The function receives a letter. This letter is a text string including gifts and parentheses ().
// To know if a letter is valid ✅, the function must check that the parentheses close correctly
// and that they are not empty. The letter may also contain braces { and square brackets
// [ inside the parentheses that make them invalid.

describe("describe", () => {
  it("if the letter has [ must return false", () => {
    expect(letterIsValid("dh[")).toBe(false);
  });
  it("if the letter has { must return false", () => {
    expect(letterIsValid("dh{")).toBe(false);
  });
  it("if the letter do not have special characters return true", () => {
    const letter = "bici coche bici coche peluche ";
    expect(letterIsValid(letter)).toBe(true);
  });
  it("if the letter have (), must check that the parentheses are not empty", () => {
    const letter = "() bici";
    expect(letterIsValid(letter)).toBe(false);
  });
  it("if the letter have ( but it do not have ) must return false", () => {
    const letter = "bici coche (balón bici coche";
    expect(letterIsValid(letter)).toBe(false);
  });
  it("the parentheses must close correctly", () => {
    const letter = "peluche (bici coche) bici coche balón";
    expect(letterIsValid(letter)).toBe(false);
  });
  it("letterIsValid must return a boolean", () => {
    const resLetterIsValid = letterIsValid("dh");
    expect(typeof resLetterIsValid).toBe("boolean");
  });
});

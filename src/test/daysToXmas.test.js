import { describe, it } from "vitest";
import { expect } from "chai";
import { daysToXmas } from "../Retos/daysToXmas";

// Difficulty: Easy
// daysToXmas is a function that passing it a Date instance tells us the number of days left until December 25.
describe("tests for daysToXmas: must return the number of day to Christmas day", () => {
  it("daysToXmas('Dec 1, 2021' must return 24", () => {
    expect(daysToXmas("Dec 1, 2021")).toBe(24);
  });
  it("daysToXmas('Dec 26, 2021 23:59:59' must return -1)", () => {
    expect(daysToXmas("Dec 26, 2021 23:59:59")).toBe(-1);
  });
  it("daysToXmas('Dec 25, 2021' must return 0", () => {
    expect(daysToXmas("Dec 25, 2021")).toBe(0);
  });
  it("daysToXmas('Dec 24, 2021 23:59:59' must return 1", () => {
    expect(daysToXmas("Dec 24, 2021 23:59:59")).toBe(1);
  });
  it("daysToXmas('Dec 24, 2021' must return 1", () => {
    expect(daysToXmas("Dec 24, 2021")).toBe(1);
  });
});

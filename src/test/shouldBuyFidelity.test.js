import { describe, it } from "vitest";
import { expect } from "chai";
import { shouldBuyFidelity } from "../Retos/shouldBuyFidelity";

// Difficulty: Hard
// shouldBuyFidelity is a function that, when I tell it how many times I go to the movies,
// it will tell me if it is worth buying the loyalty card or not.

// Single-use ticket: Costs $12 for each movie.
// Loyalty Card: Costs $250 but each time you go you pay only 75% of the ticket price.
// The best part is that it accumulates! And each time you go, you pay 75% of the ticket price you paid last time.

describe("tests for shouldBuyFidelity, return true in case that buy a membership is better", () => {
  it("shouldBuyFidelity(100) must return true", () => {
    expect(shouldBuyFidelity(100)).toBe(true);
  });

  it("shouldBuyFidelity(1) must return false", () => {
    expect(shouldBuyFidelity(1)).toBe(false);
  });
});

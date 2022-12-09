import { describe, it } from "vitest";
import { expect } from "chai";
import { wrapGifts } from "../retos/wrapGifts";

// Difficulty: Easy
// We are going to create a function that passing it an array of gifts,
// returns us another array but where all the gifts have been wrapped with asterisks both on the top and on the sides.

// - If the array is empty, return an empty array.
// - Presents are emojis 🎁... so keep that in mind when counting their length....
// - Luckily, each position of the array always has the same length....

describe("tests for wrapGifts", () => {
  it("wrapGifts must return the wrapped gifts in *", () => {
    const result = ["****", "*📷*", "*⚽️*", "****"];
    const res = wrapGifts(["📷", "⚽️"]);
    expect(res).toStrictEqual(result);
  });
  it("wrapGifts must return the wrapped gifts in *", () => {
    const res = wrapGifts(["🏈🎸", "🎮🧸"]);
    const result = ["******", "*🏈🎸*", "*🎮🧸*", "******"];
    expect(res).toStrictEqual(result);
  });
  it("wrapGifts must return the wrapped gifts in *", () => {
    const result = ["****", "*📷*", "****"];
    const res = wrapGifts(["📷"]);
    expect(res).toStrictEqual(result);
  });
});

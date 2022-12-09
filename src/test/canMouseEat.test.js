import { describe, it } from "vitest";
import { expect } from "chai";
import { canMouseEat } from "../Retos/canMouseEat";

// Difficulty: Normal
// The mouse must eat, it can move in 4 directions: up, down, left, right and the dining room is a
// matrix (an array of arrays) where each position can be:
// An empty space is that there is nothing
// An m is the mouse
// A * is the food

describe("test for canMouseEat", () => {
  const room = [
    [" ", " ", " "],
    [" ", " ", "m"],
    [" ", " ", "*"],
  ];
  const room2 = [
    ["*", " ", " ", " "],
    [" ", "m", "*", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", "*"],
  ];

  it("must return false if the mouse move on and there is not food(*)", () => {
    expect(canMouseEat("left", room)).toBe(false);
    expect(canMouseEat("up", room)).toBe(false);
    expect(canMouseEat("right", room)).toBe(false);
    expect(canMouseEat("left", room2)).toBe(false);
    expect(canMouseEat("down", room2)).toBe(false);
    expect(canMouseEat("up", room2)).toBe(false);
  });
  it("must return true if the mouse move on and there is food(*)", () => {
    expect(canMouseEat("down", room)).toBe(true);
    expect(canMouseEat("right", room2)).toBe(true);
  });
});

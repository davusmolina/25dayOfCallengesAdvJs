import { expect } from "chai";
import { describe, it } from "vitest";
import { countSheep } from "../retos/countSheep";

// Difficulty: Easy
// Consider a list/array of sheep. Each sheep has a name and a color.
// Make a function that returns a list of all sheep that are colored red and
// whose name contains both the letters n AND a, regardless of order, capitalization, or spaces.

const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

describe("Test for countSheep(): should return sheep whit color red and name whit a and n", () => {
  it("countSheep(ovejas) must return 2 sheep", () => {
    const filteredSheep = countSheep(ovejas);
    expect(filteredSheep.length).eq(2);
  });
});

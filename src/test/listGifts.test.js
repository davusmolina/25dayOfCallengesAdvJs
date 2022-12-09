import { describe, it } from "vitest";
import { expect } from "chai";
import { countGifts } from "../Retos/listGifts";

//Difficulty: Easy
//The function receive a str with a list of gifts,
//count how much of each gift there are in the list
//if the gift has _ at the beginning of the word these gift does not count
describe("describe", () => {
  const carta = "bici coche balón _playstation bici coche peluche";
  const res = {
    bici: 2,
    coche: 2,
    balón: 1,
    peluche: 1,
  };
  it("when pass letter must return res", () => {
    expect(countGifts(carta)).toStrictEqual(res);
  });
});

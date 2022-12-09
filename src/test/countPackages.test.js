import { describe, it } from "vitest";
import { expect } from "chai";
import { countPackages } from "../Retos/countPackages";

// Difficult: Hard
// We need to know the number of packages that a person will be able to handle in a day.
// To do this, we count the the number of packages that person can carry and all the carriers he has in his team.
// The array contains other arrays that contain the data for each carrier
// carrier[0] -> Name/ID of the Carrier
// carrier[1] -> Packages handled in a day
// carrier[2] -> Array with its subordinates

describe("tests for countPackages: countPackages must return the number of package that a carrier can deliver", () => {
  const carriers = [
    ["dapelu", 5, ["midu", "jelowing"]],
    ["midu", 2, []],
    ["jelowing", 2, []],
  ];
  const carriers2 = [
    ["lolivier", 8, ["camila", "jesuspoleo"]],
    ["camila", 5, ["sergiomartinez", "conchaasensio"]],
    ["jesuspoleo", 4, []],
    ["sergiomartinez", 4, []],
    ["conchaasensio", 3, ["facundocapua", "faviola"]],
    ["facundocapua", 2, []],
    ["faviola", 1, []],
  ];
  it("carriers, 'dapelu' must return 9", () => {
    expect(countPackages(carriers, "dapelu")).toBe(9);
  });
  it("countPackages(carriers2, 'camila') must return 15", () => {
    expect(countPackages(carriers2, "camila")).toBe(15);
  });
  it("countPackages(carriers2, 'camila') must return 27", () => {
    expect(countPackages(carriers2, "lolivier")).toBe(27);
  });
});

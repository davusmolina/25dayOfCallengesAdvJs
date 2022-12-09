import { expect } from "chai";
import { describe, it } from "vitest";
import { fizzBuzz } from "../Retos/fizzbuzz";

//Difficulty: Easy

describe("describe", () => {
  it("should return 1 if the parameter provided is 1", () => {
    expect(fizzBuzz(1)).toBe(1);
  });
  it("should return fizz when the parameter is multiply of 3", () => {
    expect(fizzBuzz(6)).toBe("fizz");
  });
  it("should return buzz when the parameter is multiply of 5", () => {
    expect(fizzBuzz(10)).toBe("buzz");
  });
  it("should return fizzBuzz when the parameter is multiply of 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("fizzBuzz");
  });
});

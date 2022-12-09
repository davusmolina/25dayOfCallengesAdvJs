import { describe, it } from "vitest";
import { expect } from "chai";
import { groupBy } from "../Retos/groupBy";

// Difficulty: Hard
// groupBy is a function that receives a collection (array) and a function or a property,
// and returns an object with keys that are the values of the executed function passing
// as argument each element or of the property for each element.
// Then the values are an array of the values that have the same key.

describe("tests for groupBy", () => {
  it("Return an object which keys are the values that are the result of obtain the property gave like second argument", () => {
    const collection = [
      { title: "JavaScript: The Good Parts", rating: 8 },
      { title: "Aprendiendo Git", rating: 10 },
      { title: "Clean Code", rating: 9 },
    ];
    const result = {
      8: [{ title: "JavaScript: The Good Parts", rating: 8 }],
      9: [{ title: "Clean Code", rating: 9 }],
      10: [{ title: "Aprendiendo Git", rating: 10 }],
    };
    expect(groupBy(collection, "rating")).toStrictEqual(result);
  });
  it("Return an object which keys are the values that are the result of obtain the property gave like second argument", () => {
    const collection = [{ age: 23 }, { age: 24 }];
    const result = { 23: [{ age: 23 }], 24: [{ age: 24 }] };
    expect(groupBy(collection, "age")).toStrictEqual(result);
  });
  it("Return an object which keys are the values that are the result of obtain the property gave like second argument", () => {
    const collection = ["one", "two", "three"];
    const result = { 3: ["one", "two"], 5: ["three"] };
    expect(groupBy(collection, "length")).toStrictEqual(result);
  });
  it("Return an object which keys are the values that are the result of execute the function gave like second argument", () => {
    const collection = [6.1, 4.2, 6.3];
    const result = { 6: [6.1, 6.3], 4: [4.2] };
    expect(groupBy(collection, Math.floor)).toStrictEqual(result);
  });
  it("Return an object which keys are the values that are the result of execute the function gave like second argument", () => {
    const collection = [1397639141184, 1363223700000];
    const result = { 2013: [1363223700000], 2014: [1397639141184] };
    const funct = (timestamp) => new Date(timestamp).getFullYear();
    expect(groupBy(collection, funct)).toStrictEqual(result);
  });
});

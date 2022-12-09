import { describe, it } from "vitest";
import { expect } from "chai";
import { thereIsProduct } from "../Retos/thereIsProduct";

// Difficulty: Normal
// a contains function that receives two parameters: an object, with nested objects,
// that defines the warehouse and the product we are looking for.
// The function must return a boolean indicating whether the string is found
// as a value at some level of the object

describe("test for thereIsProduct, must return true if the product exists in store: ", () => {
  const warehouse = {
    estanteria1: {
      cajon1: {
        producto1: "coca-cola",
        producto2: "fanta",
        producto3: "sprite",
      },
    },
    estanteria2: {
      cajon1: "vacio",
      cajon2: {
        producto1: "pantalones",
        producto2: "camiseta", // <- ¡Está aquí!
      },
    },
  };
  it("thereIsProduct(warehouse, 'camiseta') must return true", () => {
    const case1 = thereIsProduct(warehouse, "camiseta");
    expect(case1).toBe(true);
  });
  it("thereIsProduct(warehouse, 'pencil') must return false", () => {
    const case2 = thereIsProduct(warehouse, "pencil");
    expect(case2).toBe(false);
  });
  it("thereIsProduct(warehouse, 'pantalones') must return true", () => {
    const case3 = thereIsProduct(warehouse, "pantalones");
    expect(case3).toBe(true);
  });
  const warehouse2 = {
    baul: {
      fondo: {
        objeto: "cd-rom",
        "otro-objeto": "disquette",
        "otra-cosa": "mando",
      },
    },
  };
  it("thereIsProduct(warehouse2, 'cd-rom') must return true", () => {
    const case1 = thereIsProduct(warehouse2, "cd-rom");
    expect(case1).toBe(true);
  });
  it("thereIsProduct(warehouse2, 'gameboy') must return false", () => {
    const case2 = thereIsProduct(warehouse2, "gameboy");
    expect(case2).toBe(false);
  });
  it("thereIsProduct(warehouse2, 'disquette') must return true", () => {
    const case3 = thereIsProduct(warehouse2, "disquette");
    expect(case3).toBe(true);
  });
});

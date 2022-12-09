function isObject(variable: {}): boolean {
  return Object.prototype.toString.call(variable) === '[object Object]';
}
function flattenObject(object: object): string[] {
  const storeValues = Object.values(object);
  const values: string[][] = [];

  storeValues.forEach((value) => {
    if (isObject(value)) {
      values.push(flattenObject(value));
    } else {
      values.push(value);
    }
  });

  return values.flat(99);
}

function thereIsProduct(store: {}, product: string): boolean {
  const flattedStore = flattenObject(store);
  const productExists = flattedStore.some((element) => element === product);
  if (productExists) {
    return true;
  }
  return false;
}

export { thereIsProduct };

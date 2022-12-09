function fizzBuzz(a: number): string | number {
  if (a % 3 === 0 && a % 5 === 0) {
    return 'fizzBuzz';
  }
  if (a % 3 === 0) {
    return 'fizz';
  }
  if (a % 5 === 0) {
    return 'buzz';
  }
  return 1;
}

export { fizzBuzz };

function sumPairs(numbers: number[], result: number): [number, number] | null {
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    for (let j = 0; j < numbers.length; j++) {
      const number2 = numbers[j];
      const isResult = number + number2 === result;
      const isSamePosition = i !== j;
      if (isResult && isSamePosition) {
        const nums: [number, number] = [number, number2];
        return nums;
      }
    }
  }
  return null;
}

export { sumPairs };

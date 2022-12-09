function checkSledJump(heights: number[]): boolean {
  if (heights.length < 3) {
    throw new Error('The length array must be greater than 2');
  }

  const maxHeight: number = Math.max(...heights);
  const maxHeightIndex: number = heights.indexOf(maxHeight);

  if (maxHeightIndex + 1 === heights.length || maxHeightIndex === 0) {
    return false;
  }

  let previousUp: number = -1;
  let previousDown: number = maxHeight;

  for (let i = 0; i < heights.length; i++) {
    const height: number = heights[i];

    if (i < maxHeightIndex) {
      if (height <= previousUp) {
        return false;
      }
      previousUp = height;
    } else if (i >= maxHeightIndex) {
      if (height > previousDown) {
        return false;
      }
      previousDown = height;
    }
  }
  return true;
}

export { checkSledJump };

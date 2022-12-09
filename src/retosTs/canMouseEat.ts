function canMouseEat(direction: string, game: string[][]): boolean {
  let mousePosition: number[] = [];

  game.forEach((row, rowIndex) => {
    row.forEach((space, spaceIndex) => {
      if (space === 'm') {
        mousePosition.push(rowIndex, spaceIndex);
      }
    });
  });
  type Directions = {
    right: string;
    left: string;
    up: string;
    down: string;
  };
  const directions: Directions = {
    right: '',
    left: '',
    up: '',
    down: '',
  };
  if (mousePosition[1] > 0) {
    directions['left'] = game[mousePosition[0]][mousePosition[1] - 1];
  }
  if (mousePosition[1] < game[0].length - 1) {
    directions['right'] = game[mousePosition[0]][mousePosition[1] + 1];
  }
  if (mousePosition[0] > 0) {
    directions['up'] = game[mousePosition[0] - 1][mousePosition[1]];
  }
  if (mousePosition[0] < game.length - 1) {
    directions['down'] = game[mousePosition[0] + 1][mousePosition[1]];
  }

  if (directions[direction as keyof typeof directions] === '*') {
    return true;
  }
  return false;
}

export { canMouseEat };

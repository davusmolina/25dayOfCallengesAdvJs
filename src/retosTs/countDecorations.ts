type Tree = {
  value: number;
  left: Tree | null;
  right: Tree | null;
};
function countDecorations(bigTree: Tree): number {
  let numberOfDecorations: number = bigTree.value;
  if (bigTree.left !== null) {
    numberOfDecorations += countDecorations(bigTree.left);
  }
  if (bigTree.right !== null) {
    numberOfDecorations += countDecorations(bigTree.right);
  }

  return numberOfDecorations;
}

export { countDecorations };

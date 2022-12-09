type Tree = {
  value: number;
  left: Tree | null;
  right: Tree | null;
};

function checkIsSameTree(treeA: Tree, treeB: Tree): boolean {
  if (treeA?.value !== treeB?.value) return false;
  if (typeof treeA !== typeof treeB) return false;

  let areSame = true;
  if (typeof treeA?.left === 'object' && typeof treeB?.left === 'object') {
    areSame = checkIsSameTree(treeA.left as Tree, treeB.left as Tree);
  }

  if (!areSame) return false;

  if (typeof treeA?.right === 'object' && typeof treeB?.right === 'object') {
    areSame = checkIsSameTree(treeA.right as Tree, treeB.right as Tree);
  }
  return areSame;

  //Otra forma
  {
    // if (!treeA && !treeB) {
    //   return true;
    // } else {
    //   return (
    //     treeA?.value === treeB?.value &&
    //     checkIsSameTree(treeA?.left, treeB?.left) &&
    //     checkIsSameTree(treeA?.right, treeB?.right as Tree)
    //   );
    // }
  }
}
export { checkIsSameTree };

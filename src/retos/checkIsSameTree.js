"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsSameTree = void 0;
function checkIsSameTree(treeA, treeB) {
    if ((treeA === null || treeA === void 0 ? void 0 : treeA.value) !== (treeB === null || treeB === void 0 ? void 0 : treeB.value))
        return false;
    if (typeof treeA !== typeof treeB)
        return false;
    let areSame = true;
    if (typeof (treeA === null || treeA === void 0 ? void 0 : treeA.left) === 'object' && typeof (treeB === null || treeB === void 0 ? void 0 : treeB.left) === 'object') {
        areSame = checkIsSameTree(treeA.left, treeB.left);
    }
    if (!areSame)
        return false;
    if (typeof (treeA === null || treeA === void 0 ? void 0 : treeA.right) === 'object' && typeof (treeB === null || treeB === void 0 ? void 0 : treeB.right) === 'object') {
        areSame = checkIsSameTree(treeA.right, treeB.right);
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
exports.checkIsSameTree = checkIsSameTree;

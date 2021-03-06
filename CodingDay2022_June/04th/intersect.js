/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/** LeetCode 558. Logical OR of Two Binary Grids Represented as Quad-Trees
 * @param {Node} quadTree1
 * @param {Node} quadTree2
 * @return {Node}
 */
var intersect = function (quadTree1, quadTree2) {
  if (quadTree1.isLeaf) {
    if (quadTree1.val) return quadTree1;
    else return quadTree2;
  }
  if (quadTree2.isLeaf) {
    if (quadTree2.val) return quadTree2;
    else return quadTree1;
  }
  let topLeft = intersect(quadTree1.topLeft, quadTree2.topLeft);
  let topRight = intersect(quadTree1.topRight, quadTree2.topRight);
  let bottomLeft = intersect(quadTree1.bottomLeft, quadTree2.bottomLeft);
  let bottomRight = intersect(quadTree1.bottomRight, quadTree2.bottomRight);
  if (
    topLeft.isLeaf &&
    topRight.isLeaf &&
    bottomLeft.isLeaf &&
    bottomRight.isLeaf &&
    topLeft.val === topRight.val &&
    topRight.val === bottomLeft.val &&
    bottomLeft.val === bottomRight.val
  ) {
    return new Node(topLeft.val, true, null, null, null, null);
  }
  return new Node(false, false, topLeft, topRight, bottomLeft, bottomRight);
};

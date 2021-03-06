'use strict';

module.exports = { findBottomLeftValue };

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number} curVal
 */
function findBottomLeftValue(root) {
  let curHeight = 0;
  let curVal = 0;
  const dfs = (root, height) => {
    if (!root) {
      return;
    }
    height++;
    dfs(root.left, height);
    dfs(root.right, height);
    if (height > curHeight) {
      curHeight = height;
      curVal = root.val;
    }
  };
  dfs(root, 0);
  return curVal;
}

/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

import { tomato } from "color-name";

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root
  let right = invertTree(root.right) || null;
  let lefts = invertTree(root.left) || null;
  [root.left, root.right] = [right, lefts]
  return root
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=1008 lang=javascript
 *
 * [1008] 前序遍历构造二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  let insertIntoBST = function (root, val) {
    if (root) {
      if (root.val > val) {
        root.left = insertIntoBST(root.left, val)
      } else {
        root.right = insertIntoBST(root.right, val)
      }
      return root
    } else {
      return new TreeNode(val)
    }
  }
  return preorder.reduce((acc, v) => insertIntoBST(acc, v), null)
};

// @lc code=end


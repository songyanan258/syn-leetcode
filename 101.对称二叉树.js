/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root == null) return true

  return isAllSymmetric(root.left, root.right)
};
//递归比较左右节点是否堆成
var isAllSymmetric = function (left, right) {
  if (left === null & right === null) return true
  if (left == null || right == null || right.val != left.val) return false
  //递归
  return isAllSymmetric(left.right, right.left) && isAllSymmetric(left.left, right.right)
}
// @lc code=end


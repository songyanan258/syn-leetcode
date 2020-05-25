/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (q == null && p == null) {
    return true
  }
  if (q == null || p == null) {
    return false
  }
  if (q.val != p.val) {
    return false
  }
  return isSameTree(q.left, p.left) && isSameTree(q.right, p.right)
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function (root) {
  //边界条件判断
  if (!root) return 0
  let ans = Infinity
  let level = 1
  const dfs = function (root, level) {
    if (!root) return level
    if (!root.left && !root.right) {
      //叶子节点高度记录，取最小值
      ans = Math.min(ans, level)
    }
    dfs(root.left, level + 1)
    dfs(root.right, level + 1)
  }
  dfs(root, level)
  return ans
};
// @lc code=end


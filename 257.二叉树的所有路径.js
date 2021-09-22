/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let ans = []

  const dfs = function (root, s) {
    if (!root) return
    dfs(root.left, s ? `${s}->${root.val}` : `${root.val}`)
    dfs(root.right, s ? `${s}->${root.val}` : `${root.val}`)
    if (!root.left && !root.right) {
      ans.push(s ? `${s}->${root.val}` : `${root.val}`)
    }
  }
  dfs(root, '')
  return ans
};
// @lc code=end


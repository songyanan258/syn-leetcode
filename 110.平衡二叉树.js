/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  //标志位
  let flag = true
  //递归处理
  function dfs(root) {
    if (!root || !flag) {
      return 0
    }
    const left = dfs(root.left)
    const right = dfs(root.right)
    if (Math.abs(left - right) > 1) {
      flag = false
      return 0
    }
    return Math.max(left, right) + 1

  }
  dfs(root)
  return flag
};
// @lc code=end


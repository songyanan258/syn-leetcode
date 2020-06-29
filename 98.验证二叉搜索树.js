/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function (root) {

  //递归函数
  function dfs(root, minVal, maxVal) {
    //空树合法
    if (!root) {
      return true
    }
    if (root.val <= minVal || root.val >= maxVal) return false
    return dfs(root.left, minVal, root.val) && dfs(root.right, root.val, maxVal)
  }
  return dfs(root, -Infinity, Infinity)
};
// @lc code=end


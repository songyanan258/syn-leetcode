/*
 * @lc app=leetcode.cn id=606 lang=javascript
 *
 * [606] 根据二叉树创建字符串
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
 * @return {string}
 */
var tree2str = function (root) {
  if (!root) return ''
  const dfs = function (root) {
    if (!root) return ''
    //根据不同的情况拼装对应的字符串
    if (root.left && root.right) {
      return root.val + `(${dfs(root.left)})(${dfs(root.right)})`
    } else if (root.left) {
      return root.val + `(${dfs(root.left)})`
    } else if (root.right) {
      return root.val + `()(${dfs(root.right)})`
    }
    return `${root.val}`
  }

  return dfs(root)

};
// @lc code=end


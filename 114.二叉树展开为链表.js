/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let ans = dfs(root)
  //这里要注意边界问题，最后一个节点不需要遍历，
  for (let i = 0; i < ans.length - 1; i++) {
    const head = ans[i]
    head.left = null
    head.right = ans[i + 1]
  }
};

//生成先序遍历
const dfs = function (root) {
  let stack = []
  let ans = []
  let current = root

  while (current || stack.length) {
    if (current) {
      stack.push(current)
      ans.push(current)
      current = current.left
    } else {
      current = stack.pop()
      current = current.right
    }
  }

  return ans
}
// @lc code=end

